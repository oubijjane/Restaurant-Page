import "./styles.css";
import { loadPage } from "./home.js";
import { createMenu, loadMenuPage } from "./menu.js";
import loadContactPage from "./contact.js";
import "./rest.jpg";
import "./fonts/opensans-variablefont_wdthwght-webfont.woff";
import "./fonts/opensans-variablefont_wdthwght-webfont.woff2";


loadPage();

/* createMenu();
loadMenuPage(); */

function displayConstroller() {
    const nav = document.querySelector("nav");
    const div = document.querySelector(".content");
    const btns = document.querySelectorAll("button");
   /*  nav.addEventListener("click", (e) => {
        div.replaceChildren();
        if (e.target.className === "home") {
            loadPage();
            e.target.style.backgroundColor = "grey";
            btns.forEach(btn => {
                if(btn.className != "home")
                btn.style.backgroundColor = "rgba(240, 248, 255, 0.582)";
            })
        } else if (e.target.className === "menu") {
            loadMenuPage();
            e.target.style.backgroundColor = "grey";
            btns.forEach(btn => {
                if(btn.className != "menu")
                btn.style.backgroundColor = "rgba(240, 248, 255, 0.582)";
            })
        }
        else if (e.target.className === "contact") {
            loadContactPage();
            e.target.style.backgroundColor = "grey";
            btns.forEach(btn => {
                if(btn.className != "contact")
                btn.style.backgroundColor = "rgba(240, 248, 255, 0.582)";
            })
        } 
    }); */
    nav.addEventListener("click", (e) => {
        if (!["home", "menu", "contact"].includes(e.target.className)) {
            return;
        }
        div.replaceChildren();
        
        btns.forEach(btn => btn.style.backgroundColor = "rgba(240, 248, 255, 0.582)");
        
        switch (e.target.className) {
            case "home":
                loadPage();
                e.target.style.backgroundColor = "grey";
                break;
            case "menu":
                loadMenuPage();
                e.target.style.backgroundColor = "grey";
                break;
            case "contact":
                loadContactPage();
                e.target.style.backgroundColor = "grey";
                break;
        }
    });

}

displayConstroller();
