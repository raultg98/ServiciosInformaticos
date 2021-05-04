const { Router } = require('express');

// ESTO ES UN ARRAY DE OBJETOS, EL CUAL HE LEIDO DESDE 'Instal.dat'.
const datos = require('../datosIconos');
// console.log(datos);

const router = Router();

router.get('/', (req, res)=>{
    console.log('Estoy en la ruta: ', req.path);
    
    res.render('index', {datos});
});

router.get('/add', (req, res, next)=>{
    console.log('Estoy en la ruta /add');

    res.render('add');

    next();
});

router.post('/add', (req, res)=>{
    // Muestro todas las propiedades del archivo.
    console.log('Se ha hecho una peticion POST')
});

module.exports = router;