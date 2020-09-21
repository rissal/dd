const nav = document.querySelector(".navbar")
const search = document.getElementById("search")
const leftMe = document.getElementById('leftMe')
const rightMe = document.getElementById('rightMe')
const heart = document.querySelector('.fa-heart')
const leftPhotopea = document.getElementById('leftPh')
const rightPhotopea = document.getElementById('rightPh')
var previous

if(window.pageYOffset===0){
    setTimeout(() => {
        heart.classList.add('heart-beat')
    },1000);

}
// fetch("https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/B7nm9pVhIss/&access_token=811534662938544|04c219f741b18bc2d9fd09f2574f82bc")
//     .then(response => response.json())
//     .then(data => console.log(data))

window.onscroll = function(){
    var scroll = window.pageYOffset

    if(scroll>previous){
        nav.classList.remove("show")
        nav.classList.add("hide")
    }else{
        nav.classList.remove("hide")
        nav.classList.add("show")
    }

    if(scroll > 200){
        leftMe.classList.remove('left-b')
        leftMe.classList.add('slide-from-left')
        rightMe.classList.remove('right-b')
        rightMe.classList.add('slide-from-right')
    }
    if(scroll>650){
        leftPhotopea.classList.remove('left-b')
        leftPhotopea.classList.add('slide-from-left')
        rightPhotopea.classList.remove('right-b')
        rightPhotopea.classList.add('slide-from-right')
    }
    previous = window.pageYOffset
    console.log(scroll)
}

search.addEventListener("input", function(e){
    console.log(e.target.value)
})
