const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use(express.static('.'));

app.get('/catalogData', (req, res) => {
  fs.readFile('catalog.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.get('/cart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    res.send(data);
  });
});

app.post('/addToCart', (req, res) => {
  fs.readFile('cart.json', 'utf8', (err, data) => {
    console.log(data);
    const cart = JSON.parse(data);
    const item = req.body;

    const exItem = cart.find((x) => x.id === item.id);
    if (!exItem) {
      cart.push(item);
    } else {
      exItem.quantity++;
    }

    fs.writeFile('cart.json', JSON.stringify(cart), (err) => {
      if (err) {
        res.send('{"result": 0}');
      } else {
        console.log('done');
        res.send('{"result": 1}');
      }
    });
  });
});

app.listen(3000, function() {
  console.log('server is running on port 3000!');
});
