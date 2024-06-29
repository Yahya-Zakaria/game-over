let searchBtn = document.querySelector(".search-btn");
let searchInp = document.querySelector("#searchInp");
let navbar = document.querySelector("#navbar");


searchBtn.addEventListener("click", function (e) {
  if (searchInp.classList.contains("searchInp-static")) {
    searchInp.classList.replace("searchInp-static", "searchInp-anim");
    searchBtn.style.color = "black";
    searchBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
  } else {
    searchInp.classList.replace("searchInp-anim", "searchInp-static");
    searchBtn.style.color = "white";
    searchBtn.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";
  }
});

window.addEventListener("scroll", function () {
  let scroll = 35;
  if (window.scrollY >= scroll) {
    navbar.classList.replace("bg-transparent", "bg-dark");
    navbar.classList.add("shadow-lg");
  } else if (window.scrollY < scroll) {
    navbar.classList.replace("bg-dark", "bg-transparent");
    navbar.classList.remove("shadow-lg");
  }
});


