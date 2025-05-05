import { Router } from 'express';
const router = Router();
// const express = require('express');
// const router = express.Router();
//const Client = require('../../../models/clients')


import Client from '../../../models/clients.js';



router.get('/', async(req, res) => { // http://localhost:5000/api/clients
    
  const clients = await Client.find().select('-__v'); // -__v гооврит что нао вернуть все что есть
  res.json(clients);
})


router.get('/:id', async(req, res) => {

  const { id } = req.params;
  try {
    const client = await Client.findById(id).select('-__v');
    res.json(client);
  } catch {
    res.status(404).json(`Client ${id} not found`);
  }
});


router.post('/', async(req, res) => {

  const { fio } = req.body;
 

});




export default router;
//module.exports = router;