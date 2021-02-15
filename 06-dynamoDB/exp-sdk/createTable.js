const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

console.log("Create example table");
var params = {
    TableName: "Player",
    KeySchema: [
        { AttributeName: "name", KeyType: "HASH"},
        { AttributeName: "creationDate", KeyType : "RANGE"}
    ],
    AttributeDefinitions: [
        { AttributeName: "name", AttributeType: "S"},
        { AttributeName: "creationDate", AttributeType: "S"}
    ],

    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, (err, data) => {
    if (err) throw err;
    console.log(data);
});
