// NAVBAR
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}
//HOME PAGE SECTION 6 STARTS
let rdm = document.querySelector('.readmore');
let rdm2 = document.querySelector('.readmore2');
let mc = document.querySelector('.morecontent');
let mc2 = document.querySelector('.morecontentx');


rdm.addEventListener("click", () => {

    mc.classList.toggle("morecontent2");

});
rdm2.addEventListener("click", () => {

    mc2.classList.toggle("morecontent2");

});

//HOME PAGE SECTION 6 ENDS



//HOME PAGE FOCOUS AREA SECTION STARTS


let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let reds = document.querySelectorAll(".reds");
let blues = document.querySelectorAll(".blues");

red.addEventListener("click", (event) => {
    event.target.style.textDecoration = "underline";
    blue.style.textDecoration = "none";
    for (const r of reds) {
        r.style.display = "block";
    }
    for (const b of blues) {
        b.style.display = "none";
    }
});

blue.addEventListener("click", (event) => {
    event.target.style.textDecoration = "underline";
    red.style.textDecoration = "none";
    for (const r of reds) {
        r.style.display = "none";
    }
    for (const b of blues) {
        b.style.display = "block";
    }
});

//HOME PAGE FOCOUS AREA SECTION ENDS






