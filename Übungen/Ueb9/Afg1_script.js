document.querySelector("h1").innerHTML = "<i>Blog</i>";
//document.querySelector("h1").style.fontstyle = "italic";

document.querySelectorAll("h2").forEach(
    (element) => {
        element.textContent = "Abschnitt " + element.textContent;
    }
);