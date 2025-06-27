const hamberger = document.querySelector(".hamburger");
if (hamberger) {
    hamberger.addEventListener("click", (event => {
    const nav_links = document.querySelector(".header-nav ul");
    if (nav_links) {
        nav_links.classList.toggle("nav_hidden")
    }
}))
}