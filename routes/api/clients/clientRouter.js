import { Router } from 'express';
const router = Router();
// const express = require('express');
// const router = express.Router();
//const Client = require('../../../models/clients')


import Client from '../../../models/clients.js';



router.get('/', async(req, res) => { // http://localhost:5000/api/clients полуение всех клиентов
    
  const clients = await Client.find().select('-__v'); // ище в бд всех клиентов, -__v гооврит что нао вернуть все что есть в бд
  res.json(clients); // сервер отдаст клиентов
});



router.get('/:id', async(req, res) => { // http://localhost:5000/api/clients/id

  const { id } = req.params;  // извлекаем query-парамтер id
  try {
    const client = await Client.findById(id).select('-__v'); // нахдим в бд клиента по его id
    res.json(client); // сервер отдаст клиента по его id
  } catch {
    res.status(404).json(`Client ${id} not found`);
  }
});



router.post('/', async(req, res) => { // создание клиента

  const { fio, dateBuy, firstCame, lastCame, phone, srok, status, trenerId } = req.body; // деструктуризация
  const newClient = new Client({ fio, dateBuy, firstCame, lastCame, phone, srok, status, trenerId });

  try{
    await newClient.save(); // озранили в бд объект Client
    res.json('Client created'); // отдаем ответ сервера

  }catch{
    res.status(500).json();
  }
});



router.put('/:id', async(req, res) => { // редактивоание клиента по его id
  const _id = req.params.id;
  const { fio, dateBuy, firstCame, lastCame, phone, srok, status, trenerId } = req.body; // деструктуризация

  try{ //                                         _id - поле из бд mongo
    const client = await Client.findByIdAndUpdate(_id, {fio, dateBuy, firstCame, lastCame, phone, srok, status, trenerId })
    res.json(`Client with ${_id} editerd`);    // отдаем ответ сервера
  }catch{
    res.status(404).json(`Client with ${_id} not found`);
  }
});



router.delete('/:id', async(req, res) => { // удаление клиента по его id
  const { id } = req.params;

  try{//                   _id - поле из бд mongo
    await Client.deleteOne({_id: id});
    res.json(`Client  deleted`);    // отдаем ответ сервера 
  }catch{
    res.status(404).json(`Client with ${_id} not found`);
  }
});

// Client.findById({ "trenerId": "879"}).select('-__v') // получение всех клиентов у тренера



export default router;
 // список трнеров
 // список групповых занятий
 // список персональных занятий

