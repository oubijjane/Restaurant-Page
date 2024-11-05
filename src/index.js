import "./styles.css";
import { loadPage } from "./home.js";
import { createMenu, loadMenuPage } from "./menu.js";
import loadContactPage from "./contact.js";

loadPage();

/* createMenu();
loadMenuPage(); */

function displayConstroller() {
    const nav = document.querySelector("nav");
    const div = document.querySelector(".content");

    nav.addEventListener("click", (e) => {
        div.replaceChildren();
        if (e.target.className === "home") {
            loadPage();
        } else if (e.target.className === "menu") {
            loadMenuPage();
        }
        else if (e.target.className === "contact") {
            loadContactPage();
        }
    });

}

displayConstroller();
