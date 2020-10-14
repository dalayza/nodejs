const express = require('express');
const mongoose = require('mongoose');

const path = require('path');

const app = express();
const bodyParser = require('body-parser');

require('../config/config')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(require('../routes/index'));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.urlDB, { useNewUrlParser: true, useCreateIndex: true })
    .then(res => console.log('Base de datos ONLINE'))
    .catch(err => console.error('No pudo conectar a MongoDB..', err))

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto:', process.env.PORT);
});