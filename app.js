const express = require('express')
const app = express()

var name
var pass
var mail

var bodyParser = require('body-parser')

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('portfolio.ejs')
})

app.get('/signup', (req, res)=>{
    res.render('signup.ejs')
})
app.post('/login', (req, res)=>{
    name = req.body.name
    pass = req.body.pass
    mail = req.body.email
    console.log(req.body)
    res.render('login.ejs')
})

app.post('/success', (req, res)=>{
    if (req.body.name === name || req.body.pass === pass){
        res.render('details.ejs', {
            name: name,
            mail: mail,
            pass: pass,
            state: 'success'
        })
    } else {
        res.render('failed.ejs')
    }
})



console.log('Server Listening')
app.listen(3000)