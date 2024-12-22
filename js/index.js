// Navbar Scroll On + Scroll Top

let nav = document.querySelector(".navbar");
let scrollBtn = document.querySelector(".scroll-btn a");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("scroll-on");
    scrollBtn.style.display = "none";
  }
};

//Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");

navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

let menuIcon = document.querySelector("#menu-icon");
let navlinks = document.querySelector(".collapse.navbar-collapse");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navlinks.classList.toggle("open");
};

// //Remove Navlinks @ Click
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("scroll-on");
    scrollBtn.style.display = "none";
  }
  menuIcon.classList.remove("fa-xmark");
  navlinks.classList.remove("open");
};
