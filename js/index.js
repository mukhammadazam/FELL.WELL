let navbar = document.querySelector(".nav");
let list = document.querySelector(".nav__list");
let list1 = document.querySelector("list1");
let burger = document.querySelector(".nav__burger");
burger.addEventListener("click", function(){
    list.classList.toggle("list1")
})
