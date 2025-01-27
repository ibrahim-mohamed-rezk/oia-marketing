const dots = document.querySelectorAll(".comingSoonDot");

let currentIndex = 0;

setInterval(() => {
  dots[0].classList.add("active");

  setTimeout(() => {
    dots[1].classList.add("active");
  }, 1000);

  setTimeout(() => {
    dots[2].classList.add("active");
  }, 2000);

  setTimeout(() => {
    dots[3].classList.add("active");
  }, 3000);

  setTimeout(() => {
    dots[0].classList.remove("active");
    dots[1].classList.remove("active");
    dots[2].classList.remove("active");
    dots[3].classList.remove("active");
  }, 4000);
}, 4500);
