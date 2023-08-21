import "./styles/reset.css";
import "./styles/root.css";
import "./styles/main.css";
import "./styles/components.css";
import "./styles/utils.css";
import "./styles/media-queries.css";

const hamburgerButton = document.getElementById("menu-toggler");

hamburgerButton?.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
});
