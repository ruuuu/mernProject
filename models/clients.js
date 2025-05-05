import { Schema, model } from 'mongoose';


const clientSchema  = new Schema({
  fio: {
    type: String
  },
  dateBuy: {
    type: String
  },
  firstCame: {
    type: String
  },
  lastCame: {
    type: String
  }, 
  phone: {
    type: String
  },
  srok: {
    type: String
  },
  status: {
    type: String
  },
  trenerId: {
    type: String
  }
  
});

export default model("Client", clientSchema);
//module.exports = model("Client", clientSchema);