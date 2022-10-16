let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let frant = document.querySelector(".frant");
let back = document.querySelector(".back");
btn1.addEventListener("dblclick", function(){
    back.classList += " back1";
    frant.classList += " frant2";
})
btn2.addEventListener("dblclick", function(){
    back.classList = "back";
    frant.classList = "frant";
})