const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    Item: {
        "name": { 
            S: "Hacmiu"
        },
        "creationDate": {
            S: '' + Date.now()
        }
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "Player"
};

dynamodb.putItem(params, (err, data) => {
    if (err) throw err;
    console.log(data);
});
