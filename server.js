const express = require('express')          /* Usando o express*/
const bodyParser = require ('body-parser')
const app = express ()                      /* Usando o express*/

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function(){                        /* Usando [.listen] que vem do express, */ 
    console.log('Server running on port 3000')      /* para fazer a comunicação entre servidor e navegador*/ 
})                                                  /* rodar no terminal [node server.js], para ver se ele reconheceu o servidor*/

app.get('/',(req, res)=> {      /* usando [get] do express, para enviar alguma informação para o navegador */ 
    res.render('index.ejs')     /* que esteja vindo do servido */
})

app.set('view engine', 'ejs')

app.post('/show', (req, res) => {
    console.log(req.body)
})


