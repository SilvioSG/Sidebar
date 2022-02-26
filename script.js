let btn = document.getElementById("btn");
let sidebar = document.querySelector(".sidebar");
let buscar = document.querySelector(".search");

btn.onclick = function() {
    sidebar.classList.toggle('ativo')
}