const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Player",
    IndexName: "Player-title",
    KeyConditionExpression: "title = :title ",
    ExpressionAttributeValues: {
        ":title": {
            S: 'hacmao is powerfulll'
        }
    }
};

dynamodb.query(params, (err, data) => {
    if (err) throw err;
    console.log(JSON.stringify(data));
});