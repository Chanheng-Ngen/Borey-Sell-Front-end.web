// navbar left
const toggleButton = document.getElementById("toggle");
const bgNavbarLeft = document.getElementById("bg-navbar-left");
const navbarLeft = document.getElementById("navbar-left");

toggleButton.addEventListener("click", function () {
  bgNavbarLeft.style.display = "block"; // Show the background overlay
  setTimeout(() => {
    navbarLeft.style.left = "0"; // Slide in the navbar
  }, 10);
});

// Background overlay click event
bgNavbarLeft.addEventListener("click" , function () {
  navbarLeft.style.left = "-250px"; // Slide out the navbar
  setTimeout(() => {
    bgNavbarLeft.style.display = "none"; // Hide the background overlay
  }, 400); //  the transition duration
});

// navbar top
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(
  ".nav-left > a:not(:first-child), .about-list > a, .option > li > a"
);

links.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "var(--tx-gold)";
  }
});

// language
const ParentLanguage = document.querySelector("#id-language");
const language = document.querySelector(".language");

ParentLanguage.addEventListener("mouseover", function (event){
  if(event.target){
    language.classList.add("active-language");
  }
});
document.body.addEventListener("click", function (event){
  if(event.currentTarget){
    language.classList.remove("active-language");
  }
});
