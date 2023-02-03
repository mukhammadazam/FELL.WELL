let navbar = document.querySelector(".nav");
let list = document.querySelector(".nav__list");
let list1 = document.querySelector("list1");
let burger = document.querySelector(".nav__burger");
burger.addEventListener("click", function () {
    list.classList.toggle("list1")
});


let btn = document.querySelector(".click"),
    list2 = document.querySelector(".click__list"),
    list4 = document.querySelector(".liss");
btn.addEventListener("click", function () {
    list2.classList.toggle("click__list1")
});


