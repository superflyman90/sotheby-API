import express from 'express';
import routes from './routes/routes.js';
import './config/dbConfig.js'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});