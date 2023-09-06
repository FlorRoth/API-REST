const express= require('express');
const bodyParser = require('body-parser');
const app = express();

require ('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/autores', (req, res) => res.send('prueba obteniendo autores'));

app.post('/autores', (req, res) => res.send('prueba creando autores'));

app.put('/autores', (req, res) => res.send('prueba actualizando autores'));

app.delete('/autores', (req, res) => res.send('prueba eliminando autores'));

app.listen(3000);
