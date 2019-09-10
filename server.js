const express = require('express');
const keys = require('./config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const mongoose = require('mongoose');
let user = require("./models/user");


const app = express();

//Handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Use morgan for logging requests
app.use(morgan("dev"));

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Set the static folder
app.use(express.static(`${__dirname}/public`));

//Index Route
app.get('/', (req, res) =>{
    res.render('index', {
        stripePublishableKey: keys.stripePublishableKey
    });
});

app.post('/charge', (req, res)=>{
    const amount = 2500;
    // console.log(req.body);
    // res.send('Hello')
    stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then((customer) => {
    stripe.charges.create({
        amount,
        description:'Product name',
        currency:'cad',
        customer: customer.id
    })
  }).then((charge) => {
    // New charge created on a new customer
    res.render('success');
  })
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=>{
    console.log(`Server started on ports ${PORT}`);
})

