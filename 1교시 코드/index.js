const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');

var port = 8080
app.listen(port, () => {
  console.log(`${port} 번 포트에 연결 중 ...`);
})

app.get('/', function(req, res){
  res.render('index.ejs');
})

app.get('/chat', function(req, res){
  res.render('chat.ejs');
})

const boardRouter = require("./routers/board");
app.use('/board', boardRouter);