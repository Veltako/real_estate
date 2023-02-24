// Récupération des éléments rectangleA et rectangleB
const rectangleA = document.getElementById("rectangleA");
const rectangleB = document.getElementById("rectangleB");

// Définition de la fonction d'animation de basculement
function toggleRectangle() {
    // Ajout de la classe active au rectangle B
    rectangleB.classList.add("active");

    // Translation Y du rectangle B
    rectangleB.style.transform = "translateY(100px)";


// Ajout du gestionnaire d'événement pour le clic sur le rectangle A
    rectangleA.addEventListener("click", toggleRectangle);
}