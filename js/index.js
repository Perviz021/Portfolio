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

  // SCROLL-To-Top
  //   if (window.pageYOffset > 100) {
  //     scroll.classList.add("active");
  //   } else {
  //     scroll.classList.remove("active");
  //   }
});

let menuBtn = document.querySelector("header nav .right i");
let exitBtn = document.querySelector("header .headerMenu .exit i");
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
