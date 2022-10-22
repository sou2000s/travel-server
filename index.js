const express = require('express');
const app = express();
const port = process.env.PORT|| 5000;
const cors = require('cors')
app.use(cors());

const places = require('./data.json')



app.get('/' , (req,res) =>{
    res.send('server is running')
})

app.get('/places' , (req, res)=> {
    res.send(places);
})


app.listen( port ,()=>{
    console.log(`Example app listening on port ${port}`);
})