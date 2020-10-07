const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('../config/config')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.send('Get Usuario!');
})

app.post('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400, json({
            ok: false,
            mensaje: 'El nombre es necesario'
        }));
    } else {
        res.json({
            persona: body
        });
    }
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/usuario', function(req, res) {
    res.send('Delete Usuario!');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto:', process.env.PORT);
});