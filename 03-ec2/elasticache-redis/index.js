const mysql = require('mysql');
const dotenv = require('dotenv');
const express = require('express');
const redis = require('redis');
const util = require('util'); 

dotenv.config();

var con = mysql.createConnection({
	host : process.env.DB_HOST,
	user : process.env.DB_USER,
	password : process.env.DB_PASS,
	database: process.env.DB_DATABASE
});

// init database connect 
con.connect((err) => {
	if (err) throw err;
	console.log("Connected to RDS!");
}) ;

async function get_planet(id) {
	const query = util.promisify(con.query.bind(con));
	var res = await query(`select * from planet where id=${id}`);
	console.log(res[0].name);
	await hmset('planet', id, res[0].name);
	return res[0].name;

}

// init redis client 
const client = redis.createClient(process.env.REDIS_URL);
client.on('error', (err) => {if (err) throw err;});

// create async/await function from callback function 
const hget = util.promisify(client.hget).bind(client);
const hmset = util.promisify(client.hmset).bind(client);

// init nodejs application 
app = express();

app.get('/planet', async (req, res) => {
	var id = req.query.id; 

	// first fetch from redis client 
	var planet = await hget('planet', id);
	if (planet) return planet; 

	// if data is not in cache, then make query from rds database 
	var planet = await get_planet(id);
	res.send(planet);
});

app.listen(process.env.PORT, () => console.log(`Server is listenning at ${process.env.PORT}`));
