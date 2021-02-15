const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Player",
    Key: {
        "name" : {
            "S": "Hacmao"
        },
        "creationDate": {
            "S": "1613355171834"
        }
    },
    UpdateExpression: "SET title = :value",
    ExpressionAttributeValues : {
        ":value" : {
            S: "hacmao is powerfulll"
        }
    }
};

dynamodb.updateItem(params, (err, data) => {
    if (err) throw err;
    console.log(data);
});