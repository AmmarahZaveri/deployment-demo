const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('public'))
//app.use(express.static('${dirname}/public))

app.get('/',(req,res)=> {
    res.sendFile(path.join(_dirname,'../public/index.html'))
})

app.listen(4000, () => console.log('gliding in 4000'))