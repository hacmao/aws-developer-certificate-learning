const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Player",
    AttributeDefinitions : [
        { AttributeName: "title", AttributeType: "S"}
    ],
    GlobalSecondaryIndexUpdates: [
        {
            Create: {
                IndexName: "Player-title",
                Projection: {
                    ProjectionType: "KEYS_ONLY"
                },
                ProvisionedThroughput: {
                    WriteCapacityUnits: 5,
                    ReadCapacityUnits: 5
                },
                KeySchema: [
                    { AttributeName: "title", KeyType: "HASH"}
                ],
            }
    }]
};

dynamodb.updateTable(params, (err, data) => {
    if (err) throw err;
    console.log(data);
});