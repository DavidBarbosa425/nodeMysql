const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mysql = require('mysql')

// configuração handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// arquivos estáticos
app.use(express.static('public'))


app.get('/', (req, res)=>{
    res.render('home')
})


// criando conexão com o Mysql
const conn = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: 'nodemysql'
})

//executando conexão com o Mysql
conn.connect((err)=>{
    
    if(err){
        console.log(err)
    }
    else{
        console.log('MySQL conectado com sucesso')
        
        app.listen(port, ()=>{
            console.log(`Servidor rodando na url http://localhost:${port}`)
        })
    }
})





