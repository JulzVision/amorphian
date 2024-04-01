const sidebar = document.querySelector(".sidebar");
const ham = document.querySelector(".hamburger");
const x = document.querySelector(".close");

ham.addEventListener('click', function (){
    sidebar.style.display = 'flex';
});

x.addEventListener('click', function (){
    sidebar.style.display = 'none';
})