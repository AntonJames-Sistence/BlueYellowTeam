import AWS from "aws-sdk";
// var AWS = require('aws-sdk');
var myCredentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "IDENTITY_POOL_ID",
});

// var myConfig = new AWS.Config({
//   credentials: myCredentials,
//   region: "us-west-2",
// });
