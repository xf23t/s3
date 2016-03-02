var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config.region = 'ap-northeast-2';
var s3 = new AWS.S3();
var param= {
    'Bucket' : 'Bucketname',
    'Key' : 'logo.png',  //저장될떄 사용하는 키값
    'ACL' : 'public-read', //권한설정
    'Body' : fs.CreateReadStream('a.png'),    //전송할 파일의 내용
    'ContentType' : 'image/png'
s3.putObject({},function(err, data){
    console.log(err);
    console.log(data);
});