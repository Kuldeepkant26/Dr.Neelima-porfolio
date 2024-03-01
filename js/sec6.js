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