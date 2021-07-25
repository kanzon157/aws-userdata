const express = require('express')
const app = express()



app.get('/app1',(req,res)=>
{
    res.send("From /app1 path i am "+process.env.hostname)
})

app.get('/app2',(req,res)=>
{
    res.send("From /app2 path i am "+process.env.hostname)
})


app.get('/app3',(req,res)=>
{
    res.send("From /app3 path i am "+process.env.hostname)
})


app.get('/app4',(req,res)=>
{
    res.send("From /app4 path i am "+process.env.hostname)
})




app.listen(8080,() =>
{
    console.log("The container has started listening on port 8080")
 
  
})
