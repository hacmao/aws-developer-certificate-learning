const AWS = require('aws-sdk');
const AWSDaxClient = require('amazon-dax-client');

AWS.config.loadFromPath('/home/hacmao/.aws/config.json');

const endpoints = 'hacmao.wve6ww.clustercfg.dax.apse1.cache.amazonaws.com:8111';
const dax = new AWSDaxClient({endpoints: endpoints, region: 'ap-southeast-1'});
const daxClient = new AWS.DynamoDB.DocumentClient({ service: dax });
const tableName = 'dax-test';

for (var pk = 1; pk < 10; pk++) 
    for (var sk = 1; sk < 10; sk++){
        var params = {
            TableName: tableName,
            Key: {
                'pk': pk,
                'sk': sk
            }
        };
        daxClient.get(params, (err, data) => {
            if (err) throw err;
            console.log('Success get item of ', pk, sk);
        });
    }