// Fonction pour ouvrir la fenêtre pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Fonction pour fermer la fenêtre pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Menu rétractable
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-80px"; /* Rétracter l'en-tête */
    }
    prevScrollpos = currentScrollPos;
}
