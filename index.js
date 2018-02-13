const MongoClient = require('mongodb').MongoClient;
// import MongoClient from 'mongodb';
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// const MongoClient = MongoClient.MongoClient;


const UserActions = require('./services/userActionService');
var express = require('express');
var app = express();

const dsn = 'mongodb://localhost:27017/usersActions';

// MongoClient.connect(dsn,(err,db)=>{
// if(err) throw err;
// console.log('connection to db seeced');  
// });

mongoose.connect(dsn)
    .then(() => {
    console.log('we are connected')
},
err =>{
    throw err
});


app.get('/', function (req, res) {
    res.status(200).json(UserActions.getAll());
});

app.listen(3000);