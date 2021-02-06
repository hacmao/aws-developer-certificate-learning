rm ./LambdaS3Function.zip
zip -x *.sh -r LambdaS3Function.zip .
aws lambda update-function-code --function-name CreateThumbnail\
    --zip-file fileb://LambdaS3Function.zip\
    --cli-binary-format raw-in-base64-out
