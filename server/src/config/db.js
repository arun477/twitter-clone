/* eslint-disable no-console */

import mongoose from 'mongoose';
import constants from './constants';


mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
    mongoose.connect(constants.DB_URL)
    .then((res)=>null)
    .catch((err) => console.log(`\n some error occured while connecting to the ${dbName} database 
    \n ERROR :	${err}`));
} catch (err) {
   console.log(err)
}

mongoose.connection
  .once('open', ()=> console.log('MONGODB RUNNING'))
  .on('error', err => {
      throw err;
  })