let activebutton = document.querySelector(".fas.fa-bars");
let closebutton = document.querySelector(".fas.fa-times");
let menushow = document.querySelector(".hamburger-menu");

activebutton.addEventListener("click",function(){
 menushow.classList.add("active");
});

closebutton.addEventListener("click",function(){
    menushow.classList.remove("active");
});
