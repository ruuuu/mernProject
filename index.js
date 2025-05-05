
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import mongoose from 'mongoose';
import mainRouter from './routes/api/main.js';
import clientRouter from './routes/api/clients/clientRouter.js'; 

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require ('cors');
// const mongoose = require('mongoose');

// const mainRouter = require('./routes/api/main');
// const clientRouter = require('./routes/api/clients/clientRouter');

const app = express(); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/api', mainRouter);
app.use('/api/clients', clientRouter); // http://localhost:5000/api/clients

const PORT = process.env.PORT || 5000;
const UserDB = process.env.DB_USERNAME || 'root';
const PasswordDB = process.env.DB_PASSWORD || 'qwerty123'; 
const NameDB = process.env.DB_NAME || 'crm';
const HostDB = process.env.DB_HOST || 'mongodb://mongodb:27017/'; //  mongodb://root:qwerty123@mongodb:27017/


const start = async () => {

  try{
    await mongoose.connect(HostDB, {
      user: UserDB,
      pass: PasswordDB,
      dbName: NameDB,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Сервер запущен на http://localhost:5000 на порту ${PORT}`);
    });
  }catch(err){
    console.log(err)
  }
  
}
  
start();