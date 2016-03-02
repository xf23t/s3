var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
var s3 = new AWS.S3();
var file = require('fs').createWriteStream('123.jpg');
var params = {
    Bucket: 'mymajor',
    Key: '123.jpg'
};
s3.getObject(params).createReadStream().pipe(file);