// public/agency-template/scripts/navbar.js
const toggleMenu = document.querySelector("[data-toggle-nav]");
const navbar = document.querySelector("[data-navbar]");
const overlayNav = document.querySelector("[data-nav-overlay]");

if (toggleMenu) {
  toggleMenu.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = toggleMenu.getAttribute("data-open-nav") === "true";
    toggleMenu.setAttribute("data-open-nav", !isOpen);
    overlayNav.setAttribute("data-is-visible", !isOpen);
    document.body.classList.toggle("!overflow-y-hidden", !isOpen);
    navbar.style.height = !isOpen ? `${navbar.scrollHeight}px` : "0px";
  });

  navbar.addEventListener("click", () => {
    toggleMenu.setAttribute("data-open-nav", "false");
    overlayNav.setAttribute("data-is-visible", "false");
    document.body.classList.remove("!overflow-y-hidden");
    navbar.style.height = "0px";
  });

  overlayNav.addEventListener("click", () => {
    toggleMenu.setAttribute("data-open-nav", "false");
    overlayNav.setAttribute("data-is-visible", "false");
    document.body.classList.remove("!overflow-y-hidden");
    navbar.style.height = "0px";
  });
}