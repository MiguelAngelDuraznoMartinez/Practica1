const express = require('express');
const router = express.Router();
const inicio = require('./middlewares');

router.use(inicio);

router.get('/', (req, res) => {
  console.log('Bienvenido a la pagina de ayuda');
  res.send('Hola, que tal!');
});


router.get('/pregunta', (req, res) => {
    console.log('¿En que te puedo ayudar?');
    res.send('¿En que te puedo ayudar?');
  });
  

router.get('/respuesta', (req, res) => {
    res.send('Aqui esta lo que me pediste');
  });
  
module.exports = router;