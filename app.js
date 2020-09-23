const dotenv = require('dotenv').config()
const fetch = require('node-fetch');
const express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const https = require('https')
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
    {src:'/img/5.png',id:5,name:"Habibi Drake.",description:"This one followed Drakes single, Laugh Now Cry Later. I just felt like giving it an arab twist, following Drakes' arabic verse on Only You Freestyle."},
    {src:'/img/6.jpg',id:6,name:"Praise The Plant.",description:"What happens when you litterally get high."},
    {src:'/img/7.jpg',id:7,name:"The Last Hotbox.",description:"Nothing to see here, just 12 buddies having a smoke over what seems to be a very hot topic. The newspaper in the background has an article about the dangers of smoking, emphasizing on the fact that it KILLS."},
    {src:"/img/8.jpg",id:8,name:"Hail The Dollar",description:"I did this one following the economic crisis that has hit Lebanon. Basically, the Lebanese Lira kept plummeting in value, which led everyone to seeking dollars instead"},
    {src:"/img/9.jpg",id:9,name:"",description:""},
    {src:"/img/10.jpg",id:10,name:"",description:""},
    {src:"/img/11.png",id:11,name:"",description:""},
    {src:"/img/12.png",id:12,name:"",description:""},
    {src:"/img/13.jpg",id:13,name:"",description:""},
    {src:"/img/14.png",id:14,name:"",description:""},
    {src:"/img/15.png",id:15,name:"",description:""},
    {src:"/img/16.png",id:16,name:"",description:""},
    {src:"/img/17.png",id:17,name:"",description:""}
]

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get('/',function(req,res){
    const access_token = `${process.env.APP_ID}|${process.env.CLIENT_TOKEN}`
    const url1 = `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/B7nm9pVhIss/&access_token=${access_token}`
    const url2 = `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/B7dSl1DBhks/&access_token=${access_token}`
    const url3 = `https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/B8LwXqXhw0q/&access_token=${access_token}`
    let l = []
    let settings = { 
        method: "Get"
     };
    

    fetch(url1, settings)
    .then(res1 => res1.json())
    .then((json1) => {
        
        fetch(url2, settings)
        .then(res2 => res2.json())
        .then((json2) => {
            
            fetch(url3, settings)
            .then(res3 => res3.json())
            .then((json3) => {
                
                res.render(__dirname+'/view/index.ejs',{html1:json1.html,html2:json2.html,html3:json3.html})
        
            });
            
    
        });

    }); 

    
    
    
    


})

app.get('/images/:index',function(req,res){
    const image = sources.filter(function(image){
        return image.id == req.params.index
    })


    res.render(__dirname+"/view/singleImage.ejs",{image:image[0]})
})

app.get("/images-collection",function(req,res){
    res.render(__dirname+"/view/imagesCollection.ejs",{images:sources})
})

app.listen(process.env.PORT||3000,function(){
    console.log(`connected on port ${process.env.PORT}`)
})