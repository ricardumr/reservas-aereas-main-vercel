import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs');




import{fileURLToPath} from 'url';
import {dirname} from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));


import routes from './routes/route.js'
import mongoose from "mongoose"
const url ="mongodb+srv://aluno:<aluno>@cluster0.zuo1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(routes)
app.listen(3000);