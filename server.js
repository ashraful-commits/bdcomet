import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';
import expressLayouts from 'express-ejs-layouts';
import { router } from './routes/pageRouter.js';

// dotenv config
dotenv.config();

// init port
const port = process.env.PORT || 5000;

// init express
const app = express();

// use app

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set ejs
app.set('view engine', 'ejs');
app.set('layout', 'layouts/app');
app.use(expressLayouts);

//init  router
app.use(router);
// static public folder
app.use(express.static('public'));

// create server

app.listen(port, () => {
  console.log(`server is running port ${port}`.bgMagenta);
});
