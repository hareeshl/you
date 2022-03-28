# you - take home

Source code in this repo is organized into 2 parts 
- infra: Folder containing infrastructure code written in Typescript using CDK.
- app: Sample getting started app provided by docker.

Infra: 

CDK code is deployable to any aws account using `cdk synth && cdk deploy --all`
Below resources are provisioned,
- K8s cluster in AWS EKS.
- CodeCommit repo that will host the app source code.
- ECR repo that will host the docker image for the app.

E2E pipeline that I wanted to create is below 
![IMG_9556](https://user-images.githubusercontent.com/1754026/160494402-d58d904b-2c57-48ca-9af2-51abcd87eabc.jpg)

Components highlighted in blue have a simple version of CDK implementation, contents of brown box (CodePipeline) brown box required diving into the weeds of CDK, which I didn't do. I instead created it through the console. I also found CodePipline and K8s interaction to be sub-optimal, so I omittedv trying it for this exercise.
