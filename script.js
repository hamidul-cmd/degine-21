//hero section
let content = document.querySelector(".content");
let pera__box = document.querySelector(".pera__box");
let rating__box = document.querySelector(".rating__box");
let svg = document.querySelector(".svg_2");
let stekar = document.querySelector(".bg__stekar");


let girl = document.querySelector(".girl");
let box = document.querySelector(".box");
let buttons = document.querySelector(".buttons");


function up() {
    pera__box.style.transform = "translateY(-200px)"
    rating__box.style.transform = "translateY(-200px)"
    content.style.transform = "translateY(450px)"
    svg.style.transform = "translatex(50px)"
    stekar.style.transform = "scale(3)"
}
function down() {
    pera__box.style.transform = "none"
    rating__box.style.transform = "none"
    content.style.transform = "none"
    svg.style.transform = "none"
    stekar.style.transform = "translateY(100%)"
}

//hire section 
let hire__girl = document.querySelector(".hire__img")
let sercal__bg = document.querySelector(".sercal__bg")

hire__girl.onmouseenter = () => {

    sercal__bg.style.transform = "scale(3.5)"
    hire__girl.style.transform = "translateY(8px)"
}

hire__girl.onmouseleave = ()=>{
    sercal__bg.style.transform = "none"
    hire__girl.style.transform = "none"
}
