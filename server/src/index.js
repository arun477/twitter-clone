
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';
import mocks from './mocks';

const app = express();

const schema = makeExecutableSchema({
   typeDefs,
   resolvers
});

app.use(bodyParser.json());


app.use('/graphiql', graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH
}));

app.use(constants.GRAPHQL_PATH, graphqlExpress({
    schema
}))

const graphQLServer = createServer(app);

mocks().then(() => {
    graphQLServer.listen(constants.PORT, (err)=> {
        if (err) throw err;
        else console.log(`SERVER IS LISTENIG ON PORT ${constants.PORT}`)
    })
})
