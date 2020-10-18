const express = require('express');
const fs = require('fs');
const path = require('path');

let app =express();

const { verificaTokenImg } = require('../middlewares/autenticacion');

app.get('/imagen/:tipo/:img', verificaTokenImg,(req, res) => {
  let tipo = req.params.tipo;
  let img = req.params.img;

  let pathImg = `./uplodas/${ tipo }/${ img }`;

  let pathImagen = path.resolve(__dirname, `../uploads/${ tipo }/${ nombreImagen }`);

  let noImagenPath = path.resolve(__dirname, 'assets/no-image.jpg');

  res.sendFile(noImagenPath);
});

module.exports = app;