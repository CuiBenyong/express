var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/generateImage', function (req, res) {
  const result = {
    text: 'Hello World!',
  }
  res.header('Content-Type', 'application/json')
  res.send({
    data: {
      primary_task_id: 1803038879742402779,
      task_id: '1803038879742402779',
    },
    log_id: 1803038879742402779,
  })
})

app.post('/result', function (req, res) {
  res.send({
    data: {
      task_status: 'SUCCESS',
      task_progress: 1,
      sub_task_result_list: [
        {
          final_image_list: [
            {
              width: 720,
              img_url:
                'http://bj.bcebos.com/v1/ai-picture-creation/watermark/200243976_0_final.png?authorization=bce-auth-v1%2FALTAKBvI5HDpIAzJaklvFTUfAz%2F2024-06-18T12%3A16%3A03Z%2F86400%2F%2F88c6200d5112444f9229dfa470a5458ac3b0badef0a1089aade3eb04c0516804',
              img_approve_conclusion: 'pass',
              height: 1280,
            },
          ],
          sub_task_error_code: 0,
          sub_task_status: 'SUCCESS',
          sub_task_progress: 1,
        },
      ],
      task_id: 0,
    },
    log_id: '1803040060877968772',
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
