//For å endre innholdet på om meg siden
document.querySelector("#bio-title").addEventListener("click", function (e) {
    e.preventDefault();
    this.className = "about-title active";
    document.querySelector("#news-title").className = "about-title";

    document.querySelector("#about-news").style.display = "none";
    document.querySelector("#about-bio").style.display = "block";
})

document.querySelector("#news-title").addEventListener("click", function (e) {
    e.preventDefault();
    this.className = "about-title active";
    document.querySelector("#bio-title").className = "about-title";

    document.querySelector("#about-news").style.display = "block";
    document.querySelector("#about-bio").style.display = "none";
})

