const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);

//Database
mongoose.connect(process.env.CONNECTION_STRING, {
    dbName: 'ecommerce'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

//Server
app.listen(3008, ()=>{
    console.log('server is running http://localhost:3008');
})