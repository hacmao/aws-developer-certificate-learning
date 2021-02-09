# Simple Storage Service  

## Simple key-value store  

S3 is object based. Object consist of the following :  

+ key
+ value
+ version ID
+ metadata
+ cors

## Storage tier/classes  

+ S3 : 99.99% availability, 99.99999999% durability.
+ S3-IA (Infrequently Access)
+ S3-One Zone IA : like IA, but in one zone, low avaiblity
+ Reduced redundancy Store : data can be lost
+ Glacier : long time to access 4-5 hours
+ S3 Intelligent-Tiering : automate change object into IA after a specify time

## S3 Encryption  

+ In transist :
  + SSL/TLS

+ At Rest :
  + Server side encryption
    + S3 managed keys : SSE-S3
    + SSE-KMS
    + SSE-C : customer key  

+ Client side encryption

If the file is to be encrypted at upload time, the `x-amz-server-side-encryption` paramater will be included in the request header.  

2 value for encryption :  

+ AES256
+ ams:kms

### Force encryption when upload a file  

We can edit bucket policy to force file upload must be encrypted, it means that the request must have parameter `x-amz-server-side-encryption`.  

In tab `Permissions` of target bucket, we choose `Edit` policy. Next, choose `Policy generator`.  

+ `Select type of Policy` : S3 Bucket Policy
+ `Effect` : Deny
+ `Principal`: *
+ `Action`: PutObject
+ `ARN` : ARN of target bucket following by `/*` to select all object in the bucket.  

```json
{
  "Id": "Policy1612840703383",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1612840700863",
      "Action": [
        "s3:PutObject"
      ],
      "Effect": "Deny",
      "Resource": "arn:aws:s3:::lambda-s3-hacmao/*",
      "Principal": "*"
    }
  ]
}
```

Then copy the generated policy to edit bucket's policy.  
