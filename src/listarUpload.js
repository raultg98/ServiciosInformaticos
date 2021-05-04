const fs = require('fs');

let ruta = './public/img/upload';

let prueba = fs.readdirSync(ruta);

module.exports = prueba.length;