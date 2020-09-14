const nav = document.querySelector(".navbar")
const search = document.getElementById("search")
const left = document.getElementById('left')
const right = document.getElementById('right')
const heart = document.querySelector('.fa-heart')
var previous

if(window.pageYOffset===0){
    setTimeout(() => {
        heart.classList.add('heart-beat')
    }, 800);
}

window.onscroll = function(){
    var scroll = window.pageYOffset

    if(scroll>previous){
        nav.classList.remove("show")
        nav.classList.add("hide")
    }else{
        nav.classList.remove("hide")
        nav.classList.add("show")
    }

    if(scroll > 250){
        left.classList.remove('left-b')
        left.classList.add('slide-from-left')
        right.classList.remove('right-b')
        right.classList.add('slide-from-right')
    }
    previous = window.pageYOffset
}

search.addEventListener("input", function(e){
    console.log(e.target.value)
})
