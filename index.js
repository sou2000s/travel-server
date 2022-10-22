const express = require('express');
const app = express();
const port = process.env.PORT|| 5000;
const cors = require('cors')
app.use(cors());

const places = require('./data.json')

const hotels = require('./hotels.json')

app.get('/' , (req,res) =>{
    res.send('server is running')
})

app.get('/places' , (req, res)=> {
    res.send(places);
})

app.get("/hotels" , (req , res)=> {
    res.send(hotels)
})

app.get("/hotels/:id" , (req , res)=> {
    const id = req.params.id;
    console.log(id); 
    const selectPlaceHotels = hotels.filter(hotel => hotel.hotelid == id)
    res.send(selectPlaceHotels);
})

app.listen( port ,()=>{
    console.log(`Example app listening on port ${port}`);
})