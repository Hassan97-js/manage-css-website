import "./styles/reset.css";
import "./styles/root.css";
import "./styles/main.css";
import "./styles/components.css";
import "./styles/utils.css";
import "./styles/media-queries.css";

const menuTogglerButton = document.getElementById("menu-toggler");
const primaryNavbarElement = document.body.querySelector(".primary-navbar");

menuTogglerButton?.addEventListener("click", () => {
  if (primaryNavbarElement?.classList.contains("active")) {
    menuTogglerButton.setAttribute("aria-expanded", "false");
  } else {
    menuTogglerButton.setAttribute("aria-expanded", "true");
  }

  menuTogglerButton.classList.toggle("active");
  primaryNavbarElement?.classList.toggle("active");
});
