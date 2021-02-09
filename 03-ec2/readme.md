# Elastic Compute Cloud  

Create virtual machine within a minute. But it costs 1$ when created and hour purchase.  

## Purchase Options  

+ On_demmand : Purchase for seconds use. Stop at any time by user.  
+ Reserved : Purchase for long times(12-36 months)
+ Spot: Bid for price, use instance which is not working at the present. But it can be stoped by EC2. Large compute.
+ Dedicated : Physical host machine, when we need to integrate with our own machine.  

## Disk  

+ SSD:
  + General Purpose SSD : < 10000 IOPS
  + Provision IOPS SSD : highest performance

+ Magnetic:
  + Throughtput optimized HDD : low cost HDD, can't be boot.
  + Cold HDD: lowest cost HDD, can't be boot.
  + Magnetic: previous generation, can be boot.  

## Load balancer  

3 type of Load balancer :  

+ Application load balancer
+ Network Load balancer
+ Classic Load balancer

504 Error is timeout error.Some thing is not working.  
X-forward-for header is public ip address of end user.  

## Mutil A-Z vs Read Replica  

### Mutil A-Z  

failover, faultorelance

### Read replica  

+ Scale, performance  
+ Upto 5 copies.
+ Can be in different region.
+ Each replicas has its own DNS endpoints.

## Elasticache  

### Memcached  

+ Simple
+ Scale

### Redis  

+ Advanced data type : list, hash, sets
+ Data sorting, ranking
+ Persistance
+ Multi A-Z
