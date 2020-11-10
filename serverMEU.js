const express = require('express')          /* Usando o express*/
const bodyParser = require ('body-parser')
const app = express ()                      /* Usando o express*/

app.use(bodyParser.urlencoded({ extended: true })) /* [Body-parser] é um middleware plugins que mudam objetos em request
                                                    e response antes de serem manupullados peloa pp. [urlencoded]  diz para o body-parser extrai dados do elemneto <form>
                                                    e adicionar na propridade body no objeto resquest.  */


 app.set('view engine', 'ejs') /* Para configurar o [engine (EJS - Embedded JS)] no projeto assim pode gerar HTLM para o navegador renderizar
                                    Que nao seria necessario pq o Node ja faz essa função*/
                       

app.get('/',(req, res)=> {      /* usando [get] do express, para enviar alguma informação para o navegador */ 
res.render('index.ejs')         /* que esteja vindo do servido , [index.ejs] é o HTML que vai ser renderizado */
})


// app.post('/show', (req, res) => { 
// console.log(req.body)             })
 /*A operação CREATE do C de Crude, é executada apenas pelo navegado se uma solicitação POST [.post] 
for enviada para o servidor. POST é acionado com JS ou por meio de um elemento <form>
Ja que Express não lida com aleiturade dados do <form>, ou seja oq é preenchidos no formulario na pagina,*/

const MongoClient = require ('mongodb').MongoClient

const uri = "mongodb://localhost:27017/estudos"

MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
    db = client.db('estudos')  

    app.listen(3000, function(){                        /* Usando [.listen] que vem do express, e a função Callback, */ 
        console.log('Server running on port 3000')      /* para fazer a comunicação entre servidor e navegador*/ 
    })                                                  /* rodar no terminal [node server.js], para ver se ele reconheceu o servidor*/
    
})

app.post('/show', (req, res) => {
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('--[Salvo no banco de dados]--')
        res.redirect('/')
        db.collection('data').find().toArray((err, result) => {
            console.log(result)
        })
        
    })
})

app.get('/', (req, res) => {
    let cursor = db.collection('data').find()
})