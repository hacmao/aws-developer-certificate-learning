const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    Statement: `SELECT * from Player where "name"='Hacmao'`
}

dynamodb.executeStatement(params, (err, data) => {
    if (err) throw err;
    data.Items.forEach((item) => {
        console.log(item);
    })
});