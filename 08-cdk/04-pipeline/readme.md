# Pipeline  

[tutorial](https://docs.aws.amazon.com/cdk/latest/guide/codepipeline_example.html)  

Pipeline bao gồm 3 phần :  

+ `Code` : chứa code trong `Codecommit`
+ `Build` : build lambda function và lambda stack  
+ `Deploy` : tạo lambda stack  

Đầu tiên, định nghĩa lambda function trong thư mục `lambda`.  
Sau đó, định nghĩa `lambda-stack.ts` trong thư mục `ts`.  
`lambda-stack` có nhiệm vụ deploy chính trong repo, tạo các resource cho lambda function.  
Trong file này, chúng ta cần quan tâm tới method `lambdaCode`.  

```js
this.lambdaCode = lambda.Code.fromCfnParameters();
```

`lambdaCode` là tham số được truyền vào từ `cloudformation`. Thay đổi theo mỗi lần build lại repo.  

```js
const func = new lambda.Function(this, 'Lambda', {
    code: this.lambdaCode,
    handler: 'index.main',
    runtime: lambda.Runtime.NODEJS_10_X,
    description: `Function generated on: ${new Date().toISOString()}`,
});
```

Trong trường hợp chúng ta muốn tạo nhiều lambda function, có thể tham khảo cách làm tại [đây](https://github.com/aws/aws-cdk/issues/6965#issuecomment-604523266).  

Trở lại với stack chính để tạo pipeline, chúng ta cần định nghĩa các stage của pipeline.  

## Codecommit  

Stage đầu tiên là code được lưu trong `codecommit`.  

```js
const code = codecommit.Repository.fromRepositoryName(this, 'ImportedRepo',
    props.repoName);
```

Định nghĩa đầu ra cho stage 1 :  

```js
const sourceOutput = new codepipeline.Artifact();
```

## Build  

Tiếp đến stage build, chúng ta cần thực hiện hai công đoạn đồng thời :  

### Build lambda code  

```js
const lambdaBuild = new codebuild.PipelineProject(this, 'LambdaBuild', {
    buildSpec: codebuild.BuildSpec.fromObject({
    version: '0.2',
    phases: {
        install: {
        commands: [
            'cd lambda',
            'npm install',
        ],
        },
        build: {
        commands: 'npm run build',
        },
    },
    artifacts: {
        'base-directory': 'lambda',
        files: [
        'index.js',
        'node_modules/**/*',
        ],
    },
    }),
    environment: {
    buildImage: codebuild.LinuxBuildImage.STANDARD_2_0,
    },
});
```

Install các thự viện cần thiết và định nghĩa đầu ra `artifacts` :  

```js
const lambdaBuildOutput = new codepipeline.Artifact('LambdaBuildOutput');
```

### Build stack  

Đôi khi chúng ta muốn thay đổi cả lambda stack, nên cần build lại để update :  

```js
const cdkBuild = new codebuild.PipelineProject(this, 'CdkBuild', {
    buildSpec: codebuild.BuildSpec.fromObject({
    version: '0.2',
    phases: {
        install: {
        commands: 'npm install',
        },
        build: {
        commands: [
            'npm run build',
            'npm run cdk synth -- -o dist'
        ],
        },
    },
    artifacts: {
        'base-directory': 'dist',
        files: [
        'LambdaStack.template.json',
        ],
    },
    }),
    environment: {
    buildImage: codebuild.LinuxBuildImage.STANDARD_2_0,
    },
});
```

Định nghĩa đầu ra :  

```js
const cdkBuildOutput = new codepipeline.Artifact('CdkBuildOutput');
```

## Deploy  

```js
new codepipeline_actions.CloudFormationCreateUpdateStackAction({
    actionName: 'Lambda_CFN_Deploy',
    templatePath: cdkBuildOutput.atPath('LambdaStack.template.json'),
    stackName: 'LambdaDeploymentStack',
    adminPermissions: true,
    parameterOverrides: {
    ...props.lambdaCode.assign(lambdaBuildOutput.s3Location),
    },
    extraInputs: [lambdaBuildOutput],
})
```

Sử dụng `CloudFormationCreateUpdateStackAction` để update stack hiện có, cụ thể là update `LambdaDeploymentStack`, update s3Location.  
