const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Player",
    KeyConditionExpression : "#name = :name",
    ExpressionAttributeNames : {
        "#name" : "name"
    },
    ExpressionAttributeValues : {
        ':name' : {
            S: "Hacmao"
        }
    },
    ScanIndexForward: false  // reverse order 
};

dynamodb.query(params, (err, data) => {
    if (err) throw err;
    console.log(JSON.stringify(data));
});