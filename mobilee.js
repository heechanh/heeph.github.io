const addressbtn = document.querySelector('#address-form')
addressbtn.addEventListener("click" , function(){
    document.querySelector('.address-form').style.display = "flex"
})
const addressclose = document.querySelector('#address-close')
addressclose.addEventListener("click" , function(){
    document.querySelector('.address-form').style.display = "none"
})
// Account
const accountbtn = document.querySelector('#account-form')
accountbtn.addEventListener("click" , function(){
    document.querySelector('.account-form').style.display = "flex"
})
const accountclose = document.querySelector('#account-close')
accountclose.addEventListener("click" , function(){
    document.querySelector('.account-form').style.display = "none"
})
//icon right-left
let index =0;
const imgnuber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn = document.querySelector('.fa-chevron-right')
console.log(imgnuber.length)
rightbtn.addEventListener ("click", function(){
    index = index + 1
    if(index > imgnuber.length -1){
        index = 0;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})
const leftbtn = document.querySelector('.fa-chevron-left')
leftbtn.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgnuber.length -1;
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
})

//-------------------slider-product-----------------------------

const rightbtntwo=document.querySelector('.fa-chevron-right-two')
const leftbtntwo=document.querySelector('.fa-chevron-left-two')
console.log(rightbtntwo)
console.log(leftbtntwo)
const imgnubertwo=document.querySelectorAll('.slider-product-one-content-items')
rightbtntwo.addEventListener ("click", function(){
    index = index + 1
    if(index > imgnubertwo.length -1){
        index = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
leftbtntwo.addEventListener ("click", function(){
    index = index - 1
    if(index <= 0){
        index = imgnubertwo.length -1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%"
})
// slider 1-------------------------------------------------
const imgNuberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNuberLi.forEach(function(image,index){
    image.addEventListener("click",function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
       
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider 2-------------------------------------------------------
function imgAuto(){
    index= index +1
    if(index>imgNuberLi.length-1){
        index=0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    imgNuberLi[index].classList.add("active")
   // console.log(index)
}
setInterval(imgAuto,5000)