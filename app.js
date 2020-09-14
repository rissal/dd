const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/imageDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const Image = mongoose.model('Image', {
//     source: String, 
//     alt: String
// });

const sources = [
    {src:'/img/1.jpg',id:1,name:"Unicorn Hunter.",description:"I did this one for my friend in the picture, Assem. Its meaning is that even the rarest most beautiful creatures are not safe from the basic human instincts."},
    {src:'/img/2.png',id:2,name:"Cloudy Morning.", description:"This one is more of an eye candy than a meaninful picture. The original one wa taken in the dead sea, Jordan."},
    {src:'/img/3.png',id:3,name:"Coffee.",description:"I have been drinking coffee lately, and I could think of no better way to express my love for it than this one."},
    {src:'/img/4.png',id:4,name:"Dahmane El-Harrachi.",description:"I did this during my Dahmane El-Harrachi phase. In fact, I was listening to one of his songs while doing this."},
    {src:'/img/5.png',id:5,name:"Habibi Drake.",description:"This one followe Drakes single, Laugh Now Cry Later. I just felt like giving it an arab twist, following Drakes' arabic verse on Only You Freestyle."},
    {src:'/img/6.jpg',id:6,name:"Praise The Plant.",description:"What happens when you litterally get high."},
    {src:'/img/7.jpg',id:7,name:"The Last Hotbox.",description:"Nothing to see here, just 12 buddies having a smoke over what seems to be a very hot topic. The newspaper in the background has an article about the dangers of smoking, emphasizing on the fact that it KILLS."}
]

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function(req,res){

    res.render(__dirname+'/view/index.ejs',{images:sources})
})

app.get('/images/:index',function(req,res){
    const image = sources.filter(function(image){
        return image.id == req.params.index
    })


    res.render(__dirname+"/view/singleImage.ejs",{image:image[0]})
})

app.listen(3000,function(){
    console.log('connected on port 3000')
})