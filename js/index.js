// let menuItems = document.querySelectorAll("nav .menu li a");

// for (let i = 0; i < menuItems.length; i++) {
//   menuItems[i].addEventListener("click", function () {
//     let current = document.querySelectorAll(".active");
//     current[0].classList.remove("active");
//     this.classList.add("active");
//   });
// }

// STCIKY NAVBAR
window.addEventListener("scroll", () => {
  // NAVBAR STICKY
  let nav = document.querySelector("header nav");
  if (window.pageYOffset > 400) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  // SCROLL - To - Top;
  let scroll = document.querySelector(".scroll-to-top");
  if (window.pageYOffset > 100) {
    scroll.classList.add("active");
  } else {
    scroll.classList.remove("active");
  }
});

// NAV OPENING AND CLOSING
let menuBtn = document.querySelector("header nav .right span");

let exitBtn = document.querySelector("header .headerMenu .exit span");
let menu = document.querySelector("header .headerMenu");

menuBtn.addEventListener("click", () => {
  menu.style.opacity = 1;
  menu.style.visibility = "visible";
  menu.style.transform = "scale(1)";
});

exitBtn.addEventListener("click", () => {
  menu.style.opactiy = 0;
  menu.style.visibility = "hidden";
  menu.style.transform = "scale(0)";
});

// INPUT AND TEXTAREA
let inputs = document.querySelectorAll("#contact .form input");
let textArea = document.querySelector("#contact .form textarea");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    inputs[i].style.borderColor = "#07f7f7";
    // inputs[i].nextElementSibling.style.fontSize = "0.8rem";
    inputs[i].nextElementSibling.style.cssText =
      "font-size: 0.7rem; top: -10px; color: #07f7f7";
  });

  inputs[i].addEventListener("blur", () => {
    inputs[i].style.borderColor = "#58616d";
    inputs[i].nextElementSibling.style.cssText =
      "font-size: 1rem; top: 5px; color: #58616d";
  });
}

textArea.addEventListener("focus", () => {
  textArea.style.borderColor = "#07f7f7";
  // inputs[i].nextElementSibling.style.fontSize = "0.8rem";
  textArea.nextElementSibling.style.cssText =
    "font-size: 0.7rem; top: -10px; color: #07f7f7";
});

textArea.addEventListener("blur", () => {
  textArea.style.borderColor = "#58616d";
  textArea.nextElementSibling.style.cssText =
    "font-size: 1rem; top: 5px; color: #58616d";
});
