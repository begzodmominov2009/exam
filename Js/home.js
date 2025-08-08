const menutoggle = document.getElementById("toggle");
const menus = document.getElementById("menus");
const close = document.getElementById("close");
const header = document.getElementById("header");
const all = document.getElementById("all");
const shawarma_head = document.getElementById("shawarma-head");
const turk_kebab = document.getElementById("turk-kebab");
const burger = document.getElementById("burger");
const doner = document.getElementById("doner");
const shish = document.getElementById("shish");
const french = document.getElementById("french")
const dissert = document.getElementById("dissert")
const all_product = document.getElementById("all-product")
const shawarma = document.getElementById("shawarma")
const turk_kebabi = document.getElementById("turk-kebabi")
const hamburger = document.getElementById("hamburger")
const shish_kabab = document.getElementById("shish-kabab")
const pizzas = document.getElementById("pizzas")
const disserts = document.getElementById("disserts")


menutoggle.addEventListener("click", () => {
    menus.classList.add("menus-flex")
})

close.addEventListener("click", () => {
    menus.classList.remove("menus-flex")
    menus.classList.add("close-dure")
})

window.addEventListener("scroll", () => {
    if (scrollY > 85) {
        header.classList.add("shrink")
    } else {
        header.classList.remove("shrink")
    }

})
window.addEventListener("scroll", () => {
    menus.classList.remove("menus-flex")
    menus.classList.add("durition")
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});

all_product.classList.remove("all-hide")
shawarma.classList.add("shawarma-hide")
turk_kebabi.classList.add("turk-kabab-hide")
hamburger.classList.add("hamburger-hide")
shish_kabab.classList.add("shish-hide")
pizzas.classList.add("pizzas-hide")
disserts.classList.add("dissert-hide")

shawarma_head.addEventListener("click", () => {
    shawarma.classList.remove("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    all_product.classList.add("all-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")
})

all.addEventListener("click", () => {
    all_product.classList.remove("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
turk_kebab.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.remove("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
burger.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    hamburger.classList.remove("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
doner.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.remove("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
shish.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.remove("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
french.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.remove("pizzas-hide")
    disserts.classList.add("dissert-hide")

})
dissert.addEventListener("click", () => {
    all_product.classList.add("all-hide")
    shawarma.classList.add("shawarma-hide")
    turk_kebabi.classList.add("turk-kabab-hide")
    hamburger.classList.add("hamburger-hide")
    shish_kabab.classList.add("shish-hide")
    pizzas.classList.add("pizzas-hide")
    disserts.classList.remove("dissert-hide")
})
