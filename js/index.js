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

let options = document.querySelectorAll("#top .headerMenu ul a");

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

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    menu.style.opactiy = 0;
    menu.style.visibility = "hidden";
    menu.style.transform = "scale(0)";
  });
}

// PRELOADER
let loader = document.querySelector("#loader");

setTimeout(() => {
  loader.style.display = "none";
}, 1000);

// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

// INPUT AND TEXTAREA
let inputs = document.querySelectorAll("#contact form input");
let textArea = document.querySelector("#contact form textarea");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    inputs[i].style.borderColor = "#07f7f7";
    inputs[i].nextElementSibling.style.cssText =
      "font-size: 0.7rem; top: -10px; color: #07f7f7";
  });

  inputs[i].addEventListener("blur", () => {
    if (!inputs[i].value) {
      inputs[i].style.borderColor = "#58616d";
      inputs[i].nextElementSibling.style.cssText =
        "font-size: 1rem; top: 5px; color: #58616d";
    }
  });
}

textArea.addEventListener("focus", () => {
  textArea.style.borderColor = "#07f7f7";
  let span = document.querySelector("#contact form .div3 span");
  span.style.cssText = "font-size: 0.7rem; top: -10px; color: #07f7f7";
});

textArea.addEventListener("blur", () => {
  if (!textArea.value) {
    textArea.style.borderColor = "#58616d";
    let span = document.querySelector("#contact form .div3 span");
    span.style.cssText = "font-size: 1rem; top: 5px; color: #58616d";
  }
});
