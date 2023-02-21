const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const e = require('express');

// const cors=require('cors')
 port=4000;

 app.use(bodyParser.urlencoded({extended:false}))
 app.use(express.json())
 
 app.get('/',(req,res)=>
 {
      console.log("name",req.body.name)
 }
 )
app.post('/http://localhost:4000/api/signup',(req,res)=>
{
    console.log(res)

    // console.log("req params",req.params)
    console.log|("req body",req.body)
    let userName=req.body.name;

    let userpassword=req.body.password;
    
    res.json({
        success:true,
        name:userName,
        password:userpassword
    
    })
    
})

app.listen(port,()=>

{
    console.log(`The server is listening at ${port}`)
})






















