const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const mysql = require('mysql')

// configuração middleware (importante para pegar o body)
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// configuração handlebars
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// arquivos estáticos
app.use(express.static('public'))

// rotas
app.post('/books/insertbook', (req, res)=>{

    const title = req.body.title
    const pagesqty = req.body.pagesqty

    const sql = `INSERT INTO books(title, pageqty) VALUES ('${title}', '${pagesqty}')`

    conn.query(sql, (err)=>{
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    })
})

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
        
        // Subindo servidor
        app.listen(port, ()=>{
            console.log(`Servidor rodando na url http://localhost:${port}`)
        })
    }
})





