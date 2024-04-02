const sidebar = document.querySelector(".sidebar");
const ham = document.querySelector(".hamburger");
const x = document.querySelector(".close");


ham.addEventListener('click', function (){
    sidebar.style.display = 'flex';
});

x.addEventListener('click', function (){
    sidebar.style.display = 'none';
})

const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
  });
