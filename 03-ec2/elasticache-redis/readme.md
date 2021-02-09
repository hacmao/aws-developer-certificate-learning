# Example Elasticache with Redis  

This application is a simple cache application get idea from [amazon's example](https://github.com/aws-samples/amazon-elasticache-samples/blob/master/database-caching). It will put database query into cache. I rewrite it in `nodejs`.  

## Create MySQL database  

Install MySQL in EC2 :  

```bash
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
yum localinstall mysql80-community-release-el7-3.noarch.rpm
yum install mysql-community-server
```

Connect with MySQL database in RDS console.  

```bash
mysql -h <endpoint> -u <username> -p
```

Or by `nodejs` :  

```js
var con = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

const query = util.promisify(con.query.bind(con));
var res = await query(`select * from planet where id=${id}`);
```

## Connect to redis cluster  

```js
const redis = require('redis');

const client = redis.createClient(process.env.REDIS_URL);
client.on('error', (err) => {if (err) throw err;});
```

## Cache  

```js
app.get('/planet', async (req, res) => {
    var id = req.query.id; 

    // first fetch from redis client 
    var planet = await hget('planet', id);
    if (planet) return planet; 

    // if data is not in cache, then make query from rds database 
    var planet = await get_planet(id);
    res.send(planet);
});
```
