const bodyEl = document.querySelector("main");
const openNav = document.querySelector(".openIcon");
const closeNav = document.querySelector(".closeIcon");
const navLinks = document.querySelector(".nav__links");

navLinks.style.display = "none";

const openMenu = () => {
  navLinks.style.display = "flex";
  openNav.classList.add("hide");
  closeNav.classList.remove("hide");
  bodyEl.style.overflow = "hidden";
};

const closeMenu = () => {
  if ((navLinks.style.display = "flex")) {
    navLinks.style.display = "none";
    openNav.classList.remove("hide");
    closeNav.classList.add("hide");
    bodyEl.style.overflow = "scroll";
  }
};

openNav.addEventListener("click", openMenu);
closeNav.addEventListener("click", closeMenu);
bodyEl.addEventListener("click", closeMenu);
