let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let reds = document.querySelectorAll(".reds");
let blues = document.querySelectorAll(".blues");
// red.addEventListener("click", () => {
//     this.style.backgroundColor = "red";
//     document.querySelector("#blue").style.backgroundColor = "none";
//     for (r of reds) {
//         r.style.display = "block";
//     }
//     for (b of blues) {
//         b.style.display = "none";
//     }
// });
// blue.addEventListener("click", () => {
//     this.style.backgroundColor = "blue";
//     document.querySelector("#red").style.backgroundColor = "none";
//     for (r of reds) {
//         r.style.display = "none";
//     }
//     for (b of blues) {
//         b.style.display = "block";
//     }
// });

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