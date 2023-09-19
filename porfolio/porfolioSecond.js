// declare variables
const background = document.querySelector(".background");
const lunar = document.querySelector(".lunar");
const moon = document.querySelector(".moon");
const earth = document.querySelector(".earth");
const myself = document.querySelector(".myself");
const myname = document.querySelector(".name");
const introduction = document.querySelector(".introduction");

const main = document.querySelector(".main-content");
const blank = document.querySelector(".blank");
const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");
const contact = document.querySelector(".contact");

main.addEventListener('scroll', e => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const displacement = screenWidth * 3;
    const widthLunar = screenWidth * 0.9;
    const heightLunar = screenHeight * 0.2 * 0.55;
    radius_moon = moon.getBoundingClientRect().right - moon.getBoundingClientRect().left;
    const widthEarth =  radius_moon * 0.88 ;
    const heightEarth = radius_moon * 0.4;
    const gapOfName = 40-15;
    const gapOfNameFont = 3.5-2;
    const gapOfMoon = 0- widthLunar;
    let y_project1 = project1.getBoundingClientRect().left;
    console.log(y_project1);
    console.log(screenWidth);
    let change_position;
    if (y_project1 >= 0) {
        let change_project1 = y_project1 / screenWidth;
        change_position = 40 - gapOfName * (1-change_project1);
        let change_font = 3.5 - gapOfNameFont * (1-change_project1);
        let location = change_position + "vh";
        let fontSize = change_font +"vw";
        myself.style.top = location; 
        myname.style.fontSize =  fontSize;
    }
    if (y_project1 < (screenHeight * 0.8)) {
        introduction.style.animation = "fade-out 1s forwards";
        introduction.classList.replace("visible", "hidden");
    } else  {
        introduction.classList.replace("hidden", "visible");
        introduction.style.animation = "appear 1s forwards";
    }

    let change_blank = Math.abs(blank.getBoundingClientRect().left / displacement);
    let x_change_moon = widthLunar*change_blank + 5;
    let x_position_moon = x_change_moon + "px";
    moon.style.left = x_position_moon;
    let a = (-4 * heightLunar / widthLunar ** 2);
    let b = (4 * heightLunar / widthLunar);

    let y_change_moon = a * (x_change_moon**2) + b * x_change_moon;
    let y_position_moon = y_change_moon + "px";
    moon.style.bottom = y_position_moon;
    

    let x_change_earth = x_change_moon + radius_moon + 10 - widthEarth*change_blank;
    let x_position_earth = x_change_earth + "px";
    earth.style.left = x_position_earth;

    let y_change_earth = y_change_moon - heightEarth*change_blank;
    let y_position_earth = y_change_earth + "px";
    earth.style.bottom = y_position_earth;

})