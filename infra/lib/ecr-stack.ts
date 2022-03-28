import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_ecr as ecr } from 'aws-cdk-lib';

export class ECRStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
  	super(scope, id, props);
  	
  	new ecr.Repository(this, 'you-app-repo');
  }
}

