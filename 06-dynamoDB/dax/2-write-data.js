const AWS = require('aws-sdk');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const dynClient = new AWS.DynamoDB.DocumentClient();

const someData = 'XXXXXXXXXX';

for (var pk=0; pk < 50; pk++) {
    for (var sk=0; sk < 10; sk++) {
        var params = {
            TableName: 'dax-test',
            Item: {
                'pk': pk,
                'sk': sk,
                'someData': someData
            }
        };
        dynClient.put(params, (err, data) => {
            if (err) throw err;
        });
    }
}