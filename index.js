var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/generateImage', function (req, res) {
    const result = {
        text: 'Hello World!'
    }
    res.send({
        taskId: Date.now()
    });
});

app.get('/result', function (req, res) {
    res.send({
        status: 'success',
        waiting: req.query.taskId + 60000 -  Date.now(),
        "style": "油画",
        "taskId": 18546968,
        "imgUrls": [
            {
                "image": "http://bj.bcebos.com/v1/ai-picture-creation/watermark/60d1e8cc4f6406c4dffdfa2976150872ex.jpg?authorization=bce-auth-v1%2FALTAKBvI5HDpIAzJaklvFTUfAz%2F2024-03-20T11%3A10%3A07Z%2F86400%2F%2F17ec73c2d89b68746f656a7f74beba2cab7de026ba30ab0ab7ca4fe980bf19ad",
                "img_approve_conclusion": "paas"
            }
        ],
        "text": "睡莲",
        "status": 1,
        "createTime": "2024-03-20 19:09:49",
        "img": "http://bj.bcebos.com/v1/ai-picture-creation/watermark/60d1e8cc4f6406c4dffdfa2976150872ex.jpg?authorization=bce-auth-v1%2FALTAKBvI5HDpIAzJaklvFTUfAz%2F2024-03-20T11%3A10%3A07Z%2F86400%2F%2F17ec73c2d89b68746f656a7f74beba2cab7de026ba30ab0ab7ca4fe980bf19ad",
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});