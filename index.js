var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var personsRoutes = require('./routes/persons');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.post('/addperson', (req, res)=>{
  res.send("MR POOPY")
})

app.use('/medMinder/persons', personsRoutes);




//listener
app.listen(port, ()=>{
  console.log(`App running @localhost:${port}`)
})
