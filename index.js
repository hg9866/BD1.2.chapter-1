const express = require('express');
let cors = require("cors");


const app = express();
const PORT = 3000;
app.use(cors());

//Endpoint 1: Calculate the Returns of the Stocks added
//API Call: <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>
app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseFloat(req.query.quantity);

  let totalReturnValue = (marketPrice - boughtAt) * quantity;
  res.send(totalReturnValue.toString());
});

// Endpoint 2: Calculate the Total Returns
//API Call: <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>

app.get('/total-returns', (req,res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturns.toString());
})

//Endpoint 3: Calculate the Return Percentage
//API Call: <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  let returnPercentage = (returns / boughtAt) * 100;
  res.send(returnPercentage.toString());
});

//Endpoint 4: Calculate the Total Return Percentage
//API Call: <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  let totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(totalReturnPercentage.toString());
});

//Endpoint 5: Identify the Status of Stocks based on their Return Value
//API Call: <http://localhost:3000/status?returnPercentage=90>
app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = '';

  if (returnPercentage > 0) {
    result = 'Profit';
  } else {
    result = 'Loss';
  }

  res.send(result);
});

app.listen(PORT, () => {
  console.log('Server is runnning on http://localhost:' + PORT);
});
