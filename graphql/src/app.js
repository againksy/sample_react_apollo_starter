import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from'morgan';
import  { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

const port = 3000;
app.use(logger());
app.use('/graphql', cors(), bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
app.listen(port, () => console.log(`Server on ${port}`));
