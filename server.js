if(process.env.NODE_ENV !== 'production'){

    require('dotenv').config()
}


const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


console.log(stripeSecretKey)
console.log(stripePublicKey)

const express = require('express')
const app = express()
const fs =require('fs')
//const ejs = require ('ejs');

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.static('view'))//this command is for front file which take from public folder
//app.engine('ejs' , require('ejs').__express);


app.get('/store' , function(req, res) {
    fs.readFile('item.json' , function(error,data){
    if(error){

        res.status(500).end()}
    else {
        res.render('store.ejs', {

            items : JSON.parse(data)
        })
    }

    })
})

app.listen(4000, () => console.log('listing'));
