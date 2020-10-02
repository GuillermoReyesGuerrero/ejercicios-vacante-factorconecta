// Importamos express para las rutas 
const { Router } = require('express');
const router = Router();

// ruta inicial
router.get('/', (req, res) =>{
    res.json("Servidor listo");
});

// ruta para saber si es palindromo 
router.post('/palindrome', (req, res) =>{
    const text = req.body.phrase;
    var respuesta = true;
    var text2 = "";

    for(var i = text.length-1; i >= 0; i--){
        text2 += text[i];
    }

    console.log(text);
    console.log(text2);

    if(text == text2){
        respuesta = true;
    }else{
        respuesta = false;
    }
    
    console.log(respuesta);
    res.json({
        palindrome: respuesta
    });

});



module.exports = router;