import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_ecr as ecr } from 'aws-cdk-lib';
import { aws_codecommit as codecommit } from 'aws-cdk-lib';

export class CodeCommitStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
  	super(scope, id, props);
  	
  	const repo = new codecommit.Repository(this, 'Repository', {
      repositoryName: 'you-app-repo',
      description: 'Code repo for you app', // optional property
    });
  }
}

