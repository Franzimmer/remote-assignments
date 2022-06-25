const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.static('html'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Hello World! This is My Server!');
})

app.get('/getData', (req, res) => {
  const number = req.query.number;
  
  let result;
  if (typeof number === "undefined") {
    result = "Lack of Parameter";
  } else if (isNaN( Number(number) )) {
    result ="Wrong Parameter";
  } else {
    result = (1 + Number(number)) * Number(number) / 2;
  } 

  res.send(`${result}`);
})

app.get('/myName', (req, res) => {
  const username = req.cookies.username;
  res.render('name', { username });
})

app.get('/trackName', (req, res) => {
  const name = req.query.name;
  res.cookie("username", name);
  res.redirect('/myName');
})

app.post('/trackName', (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect('/myName');
})

app.listen(3000, (res, req) => {
  console.log('The server is working well!');
});