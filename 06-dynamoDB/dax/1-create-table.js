const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "dax-test",
    KeySchema: [
        { AttributeName: 'pk', KeyType: 'HASH'},
        { AttributeName: 'sk', KeyType: 'RANGE'}
    ],
    AttributeDefinitions: [
        { AttributeName: 'pk', AttributeType: 'N'},
        { AttributeName: 'sk', AttributeType: 'N'}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, (err, res) => {
    if (err) throw err;
    console.log(res);
});