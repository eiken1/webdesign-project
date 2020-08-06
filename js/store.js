//For å endre innhold på store siden
window.onload = (event) => {
    init();
};

function init() {
    document.querySelector("#clothes-nav").className = "active";
    document.querySelector("#music-nav").className = "";
    document.querySelector("#accesory-nav").className = "";

    document.querySelector("#shopping-items").style.display = "block";
    document.querySelector("#cart-div").style.display = "none";
    document.querySelector("#clothes-div").style.display = "flex";
    document.querySelector("#music-div").style.display = "none";
    document.querySelector("#accessories-div").style.display = "none";

}

document.querySelector("#clothes-nav").addEventListener("click", function (e) {
    e.preventDefault();
    this.className = "active";
    document.querySelector("#music-nav").className = "";
    document.querySelector("#accesory-nav").className = "";

    document.querySelector("#shopping-items").style.display = "block";
    document.querySelector("#cart-div").style.display = "none";
    document.querySelector("#clothes-div").style.display = "flex";
    document.querySelector("#music-div").style.display = "none";
    document.querySelector("#accessories-div").style.display = "none";
})

document.querySelector("#music-nav").addEventListener("click", function (e) {
    e.preventDefault();
    this.className = "active";
    document.querySelector("#clothes-nav").className = "";
    document.querySelector("#accesory-nav").className = "";

    document.querySelector("#shopping-items").style.display = "block";
    document.querySelector("#cart-div").style.display = "none";
    document.querySelector("#clothes-div").style.display = "none";
    document.querySelector("#music-div").style.display = "flex";
    document.querySelector("#accessories-div").style.display = "none";
})

document.querySelector("#accesory-nav").addEventListener("click", function (e) {
    e.preventDefault();
    this.className = "active";
    document.querySelector("#music-nav").className = "";
    document.querySelector("#clothes-nav").className = "";

    document.querySelector("#shopping-items").style.display = "block";
    document.querySelector("#cart-div").style.display = "none";
    document.querySelector("#clothes-div").style.display = "none";
    document.querySelector("#music-div").style.display = "none";
    document.querySelector("#accessories-div").style.display = "flex";
})

/*
const list = document.querySelector("#shopping-items");
list.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target && (e.target.className === "cloth-div" || e.target.className === "music-div" || e.target.className === "accessory-div")) {
        document.querySelector("#music-nav").className = "";
        document.querySelector("#clothes-nav").className = "";
        document.querySelector("#accesory-nav").className = "";

        document.querySelector("#cart-div").style.display = "flex";
        document.querySelector("#shopping-items").style.display = "none";
    }
})
*/

const cloth = document.querySelectorAll(".cloth-div");
const music = document.querySelectorAll(".music-div");
const access = document.querySelectorAll(".accessory-div");

cloth.forEach(el => {
    el.addEventListener("click", function (e) {
        document.querySelector("#music-nav").className = "";
        document.querySelector("#clothes-nav").className = "";
        document.querySelector("#accesory-nav").className = "";

        document.querySelector("#cart-div").style.display = "flex";
        document.querySelector("#shopping-items").style.display = "none";
    })

});

music.forEach(el => {
    el.addEventListener("click", function (e) {
        document.querySelector("#music-nav").className = "";
        document.querySelector("#clothes-nav").className = "";
        document.querySelector("#accesory-nav").className = "";

        document.querySelector("#cart-div").style.display = "flex";
        document.querySelector("#shopping-items").style.display = "none";
    })

});

access.forEach(el => {
    el.addEventListener("click", function (e) {
        document.querySelector("#music-nav").className = "";
        document.querySelector("#clothes-nav").className = "";
        document.querySelector("#accesory-nav").className = "";

        document.querySelector("#cart-div").style.display = "flex";
        document.querySelector("#shopping-items").style.display = "none";
    })

});


document.querySelector("#cart-button").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#cart-popup").style.display = "grid";
});

document.querySelector("#close-x").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#cart-popup").style.display = "none";
})

document.querySelector("#resume-button").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#cart-popup").style.display = "none";
})

//Event listener that replaces content on the store page with the confirm order page
document.querySelector("#continue-button").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#store-main").style.display = "none";
    document.querySelector("#checkout-main").style.display = "grid";
})

document.querySelector("#confirm-button").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#store-main").style.display = "none";
    document.querySelector("#checkout-main").style.display = "none";
    document.querySelector("#confirmation-div").style.display = "flex";
})
