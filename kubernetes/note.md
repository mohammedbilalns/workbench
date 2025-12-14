# What is 
Open source container orchestration system for building and managing containerized applications.
- devoleped by google
- helps to mange containerized applications in different deplyment environments

# Why and what it does 
- trend from monolith to microservices
- incresed usage of containers

# Features
- High Availability or no downtime 
- scalability or high perfomance 
- Disaster Recovery- backup and restore 

# Components
## Pod 
smallest unit of k8s 
- abstraction over container
- usually 1 application per pod 
- each pod gets its own IP address
- new Ip address on re-creation
## Service 
- permenant ip address for a pod
- lifecycle of pod and service are not connected
- it is also a load balancer
## Ingress
- service that forwards traffic to a pod
## Node 
Simple Physical or Virtual Machines
## ConfigMap 
- External configuration of the applications 
## Secret
- used to store sensitive information
- stored in base64 encoded format
## Volumes
- used to store data
- can be used to store data in a file system or in a block storage
## Deployment
- blueprint for running a pod
- abstraction of pods
- for stateless apps 
## StatefulSet
- blueprint for stateful applications like databases

# Kubernetes Architecture
## Worker machine 
- each node has multiple pods on it 
- 3 processse must be installed on each node
- worker nodes do the actual work
processes are 
1. container runtime (docker)
2. kubelet (process of kubernetes)
    - interacts with the both the container and node 
    - kubelet starts the pod with container inside 
    - assigns resource to the pod
3. kube-proxy (process of kubernetes)
    - forwards traffic to the pod
    - handles load balancing
## Master Processes
- 4 processees running on master node
1. Api Server 
    - cluster gateway
    - acts as a gatekeeper for authentication
2. Scheduler
    - after validating the pod, it assigns the pod to the node
    - it also assigns the resource to the pod
    - checks the avaliable resources on the node before assigning
    - Scheduler decides on which node new pod should be scheduled
3. Controller Manager
    - detects changes in the cluster
    - it also monitors the pods and services
4. etcd
    - key value store in which cluster changes are stored
    - 




