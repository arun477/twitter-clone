
import express from 'express';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import middlewares from './config/middlewares';
import mocks from './mocks';

const app = express();

middlewares(app);

const graphQLServer = createServer(app);

mocks().then(() => {
    graphQLServer.listen(constants.PORT, (err)=> {
        if (err) throw err;
        else console.log(`SERVER IS LISTENIG ON PORT ${constants.PORT}`)
    })
})
