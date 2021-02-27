// Affichage compte à rebours Wedding
var Affiche=document.getElementById("compte");
function Rebour() {
var date1 = new Date();
var date2 = new Date ("Sep 5 17:00:00 2022"); // Date et heure de l'événement
var sec = (date2 - date1) / 1000; // Temps donné en millièmes de seconde
var n = 24 * 3600; //nombre de secondes dans un jour
if (sec > 0) {
    j = Math.floor (sec / n);
    h = Math.floor ((sec - (j * n)) / 3600);
    mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
    sec = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
    Affiche.innerHTML = "Temps restant : " + j +" jours, "+ h +" h "+ mn +" min et "+ sec + " sec ";
}
else if (Math.abs(sec) < (3 * n)) { // Durée de l'événement
    Affiche.innerHTML = "Temps restant : Le tournoi est en cours, venez profiter du spectacle";
}
else {
    Affiche.innerHTML = "Temps restant : Le tournoi est terminé, retrouvez toutes les informations sur le site";
}

tRebour=setTimeout ("Rebour();", 1000);
}
Rebour();