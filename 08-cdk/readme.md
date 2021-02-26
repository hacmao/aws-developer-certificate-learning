# CDK  

CDK [reference](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)  

`CDK` được tạo ra để tạo các resources của một ứng dụng trên cloud. Nó sẽ tạo ra các `Stack` trong `cloudformation`.Chúng ta sẽ không phải vất vả viết `Cloudformation` template nữa TvT.  

Các lệnh cơ bản để làm việc với `CDK` :  

```bash
cdk init app -l typescript
cdk synth
cdk bootstrap
cdk deploy
cdk destroy
```
