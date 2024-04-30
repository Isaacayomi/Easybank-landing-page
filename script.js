const main = document.querySelector("main");
const body = document.querySelector("body");
const openNav = document.querySelector(".openIcon");
const closeNav = document.querySelector(".closeIcon");
const navLinks = document.querySelector(".nav__links");

navLinks.style.display = "none";

main.classList.remove("addOverlay");

const openMenu = () => {
  navLinks.style.display = "flex";
  openNav.classList.add("hide");
  closeNav.classList.remove("hide");
  main.classList.add("addOverlay");
  main.style.height = "100%";
  body.style.overflow = "hidden";
};

const closeMenu = () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    openNav.classList.remove("hide");
    closeNav.classList.add("hide");
    main.classList.remove("addOverlay");
    body.style.overflow = "scroll";
  }
};

document.querySelector(".nav__items").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    body.style.overflow = "scroll";

    closeMenu();
  }
});

openNav.addEventListener("click", openMenu);
closeNav.addEventListener("click", closeMenu);
main.addEventListener("click", closeMenu);
