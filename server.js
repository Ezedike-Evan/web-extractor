const express = require('express')

const app = express()
const PORT = process.env.PORT || 8000

//view engine
app.set('view engine' , 'ejs')


app.get('/',(req,res)=>{
    res.render('index') 
})

app.use((req,res)=>{
    res.status(404).render('404')
})

app.listen(PORT,() => console.log('connected'))