var card=document.querySelector(".card")
var heart=document.querySelector("i")
card.addEventListener("click",function(){
    heart.style.transform="translate(-50%,-50%) scale(1)"
    heart.style.opacity=0.8
    setTimeout(function(){
        heart.style.opacity=0 
    },1000)
    setTimeout(function(){
        heart.style.transform="translate(-50%,-50%) scale(1)" 
    },3000)
})
var textt=document.querySelector("h3")
var button=document.querySelector(".tab")
button.addEventListener("click",function(){
    textt.innerHTML="Do Visit Once"
    textt.style.fontFamily="cursive"
    textt.style.color="#7a3b2e"
    textt.style.fontSize="19px"
    

    

})


