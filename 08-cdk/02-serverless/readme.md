# Serverless CDK

[tutorial](https://docs.aws.amazon.com/cdk/latest/guide/serverless_example.html)  

Ví dụ này trình bày cách để xây dựng một ứng dụng đơn giản bao gồm :  

+ Lambda
+ Api gateway
+ S3

Ứng dụng sẽ tạo một S3 bucket, bằng phương thức post vào api endpoint tương ứng sẽ put 1 file vào bucket, đồng thời cũng có thể truy cập vào endpoint để xem nội dung các file trong bucket.  

Lambda functions được chứa trong `resources`.  

Tạo bucket :  

```js
const bucket = new s3.Bucket(this, "WidgetStore");
```

Tạo lambda function :  

```js
const handler = new lambda.Function(this, "WidgetHandler", {
    runtime: lambda.Runtime.NODEJS_10_X, // So we can use async in widget.js
    code: lambda.Code.fromAsset("resources"),
    handler: "widgets.main",
    environment: {
    BUCKET: bucket.bucketName
    }
});
```

Trao quyền ghi lên bucket cho lambda function :  

```js
bucket.grantReadWrite(handler); // was: handler.role);
```

Tạo `api gateway` :  

```js
bucket.grantReadWrite(handler); // was: handler.role);

const api = new apigateway.RestApi(this, "widgets-api", {
    restApiName: "Widget Service",
    description: "This service serves widgets."
});
```

Tạo `GET` method cho root :  

```js
const getWidgetsIntegration = new apigateway.LambdaIntegration(handler, {
    requestTemplates: { "application/json": '{ "statusCode": "200" }' }
});

api.root.addMethod("GET", getWidgetsIntegration); // GET /
```

Tạo sub resource :  

```js
const widget = api.root.addResource("{id}");

// Add new widget to bucket with: POST /{id}
const postWidgetIntegration = new apigateway.LambdaIntegration(handler);

// Get a specific widget from bucket with: GET /{id}
const getWidgetIntegration = new apigateway.LambdaIntegration(handler);

// Remove a specific widget from the bucket with: DELETE /{id}
const deleteWidgetIntegration = new apigateway.LambdaIntegration(handler);

widget.addMethod("POST", postWidgetIntegration); // POST /{id}
widget.addMethod("GET", getWidgetIntegration); // GET /{id}
widget.addMethod("DELETE", deleteWidgetIntegration); // DELETE /{id}
```
