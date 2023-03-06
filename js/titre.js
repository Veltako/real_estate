// Animation sur le titre ARRAS
$(document).ready(function () {
    //Passe la taille de police à 20px sur 2 secondes
    $(".arras").animate({
        fontSize: "60px"
    }, 2000)

})


let bien = document.getElementById("bien");
let photom = document.getElementById("photom");

bien.addEventListener("click", () => {
    if (getComputedStyle(photom).display != "none"){
        photom.style.display = "none";
    } else {
        photom.style.display = "block";
    }
})