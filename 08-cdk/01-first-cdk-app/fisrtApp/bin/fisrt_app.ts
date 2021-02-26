#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FisrtAppStack } from '../lib/fisrt_app-stack';

const app = new cdk.App();
new FisrtAppStack(app, 'FisrtAppStack');
