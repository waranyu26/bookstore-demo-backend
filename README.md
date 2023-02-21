# Bookstore Backend App

## Description

This is a bookstore backend project with [Nest](https://github.com/nestjs/nest) framework TypeScript repository.

## Technologies

- [AWS Lambda](https://aws.amazon.com/lambda)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb)
- [Serverless](https://serverless.com/framework/docs/providers/aws/)
- [NestJS](https://docs.nestjs.com/)
- [NestJS Dynamoose](https://github.com/hardyscc/nestjs-dynamoose)
- [Alchemy](https://dashboard.alchemy.com/)

## Architecture Diagram
![ArchitectureDiagram](assets/img/AWS%20Architecture%20Diagram.png)

## Setup AWS Credentials

1. [Sign up for an AWS account](https://serverless.com/framework/docs/providers/aws/guide/credentials#sign-up-for-an-aws-account)

2. Login to your AWS account and go to the **Identity & Access Management (IAM)** page.

3. Click on **Users** and then **Add user**. Enter a name in the first field to remind you this User is related to the Serverless Framework, like `serverless-admin`. Enable **Programmatic access** by clicking the checkbox. Click **Next** to go through to the Permissions page. Click on **Attach existing policies directly**. Search for and select **AdministratorAccess** then click **Next: Review**. Check to make sure everything looks good and click **Create user**.

4. View and copy the **API Key & Secret** to a temporary place. You'll need it in the next step.

## Setup Workstation

Install AWS CLI

- Windows: `choco install awscli`
- MacOS: `brew install awscli`

Config AWS CLI

```bash
$ aws configure

AWS Access Key ID [****************TKYQ]:
AWS Secret Access Key [****************yNO2]:
Default region name [us-east-1]:
Default output format [None]:
```

> Please enter your **AWS Access Key ID**, **AWS Secret Access Key** and **Default region name**

## Deployment

```bash
# deploy to AWS
$ npm run deploy
```

## Install DynamoDB local

```bash
# download dynamodb local into .dynamodb folder
$ npm run ddb:install
```

## Local Offline Development

```bash
# start dynamodb local
$ npm run ddb:start

# start serverless-offline server
$ npm run sls:offline

# start serverless-offline server and connect to online dynamodb
$ npm run sls:online
```

## Local NestJS Development - (Optional)

```bash
# start dynamodb local
$ npm run ddb:start

# start local nestjs server
$ npm start

# start local nestjs server in watch mode
$ npm run start:watch

# start local nestjs server and connect to online dynamodb
$ npm run start:online
```

## Tools

```bash
# re-generate the resources/dynamodb.yml from schemas
$ npm run genres
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
