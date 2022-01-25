// Sticky navigation bar

const observedSec = document.querySelector(".observed");
const navBar = document.querySelector(".navbar");
const navbarBtn = document.querySelector(".navbar__btn");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      if (navBar.classList.contains("navbar--dark")) {
        navBar.classList.add("navbar--dark-active");
      } else {
        navBar.classList.add("navbar--active");
      }
    } else {
      navBar.classList.remove("navbar--active");
      navBar.classList.remove("navbar--dark-active");
    }
  });
}, options);

observer.observe(observedSec);

navbarBtn.addEventListener("click", function () {
  navBar.classList.toggle("navbar--opened");
});
