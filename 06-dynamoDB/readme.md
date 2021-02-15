# DynamoDB

[Dynamodb SDK](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Operations_Amazon_DynamoDB.html)  

[Sample](https://github.com/aws-samples/aws-dynamodb-examples/tree/master/DynamoDB-SDK-Examples/node.js)  

## Definations  

+ DynamoDB is low latency NoSQL database
+ Table of items and attributes
+ Supports both document and key-value data models
+ Supported document formats are JSON, HTML, XML.
+ 2 types of Primary Key :
  + Partition key
  + combination of Partition key and Sort key

## Indexes

Index enable fast queries on specific data columns.  
Give different view of your data, based on alternative Partition/Sort Keys.  

+ Local Secondary Index
  + Must be created at when table is created
  + Same Partition Key as table
  + Different Sort Key

+ Global Secondary Index
  + Can create at any time
  + Different Partition Key
  + Different Sort Key

## Scan vs Query

+ A query finds items in a table using only Primary Key attribute
+ A scan operation retrieve all items in database before filter
+ By default, returns all data attributes
+ Use `ProjectionExpression` to refine the results
+ Sorted by Sort Key in ascending order
+ Set `ScanIndexForward` to `false` to reverse order.
+ Query is faster than Scan
+ Reduce the impact of query or scan by setting smaller page size which uses fewer read operations.
+ Parallel scan
+ Avoid Scan

## Provision Throughput

1 Read capacity Units =  

+ 1 Strongly consistent reads of 4KB per second
+ 2 Eventually consisten reads of 4 KB per second

Write Capacity Units = 1 x 1KB Write per second
