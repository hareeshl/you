import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_eks as eks } from 'aws-cdk-lib';

export class K8ClusterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
  	super(scope, id, props);

  	const cluster = new eks.Cluster(this, 'app-cluster', {
			version: eks.KubernetesVersion.V1_21,
		});

		// apply a kubernetes manifest to the cluster
		cluster.addManifest('youpod', {
		  apiVersion: 'v1',
		  kind: 'Pod',
		  metadata: { name: 'youpod' },
		  spec: {
		    containers: [
		      {
		        name: 'you-app',
		        image: '706000060190.dkr.ecr.us-west-2.amazonaws.com/ecrstack-youapprepo3614c8bc-mxkebillu8rq:latest',
		        ports: [ { containerPort: 8080 } ],
		      },
		    ],
		  },
		});
  }
}

