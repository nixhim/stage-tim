// DECLARATIONS DES TYPES DE DONNEES ET DES DONNEES

/* Un 'type de données' inventé.*/
class Disque {

    constructor(artiste, annee, album) {
        this.artiste = artiste;
        this.annee = annee;
        this.album = album;
    }

}

/* Un 'tableau' ou on fait une liste ordonnée d'objet qu'on veut.*/
const mesDisques = [
    new Disque("Balrog", 2001, "Kill Yourself"),
    new Disque("Balrog", 2007, "Ars Talionis : The Art of Retaliation"),
    new Disque("Elend", 1994, "Leçons de Ténèbres"),
    new Disque("Elend", 1996, " Les Ténèbres du dehors"),
    new Disque("Elend", 1997, "Weeping Nights"),
    new Disque("Elend", 1998, "The Umbersun")
];

// DECLARATION DES FONCTIONS
function demarrer() {
    direBonjour();
    mettreAjourPageAvecTableauDeDisques(mesDisques);
}

function direBonjour() {
    alert("Bonjour à tous les amis !");
}

function mettreAjourPageAvecTableauDeDisques(tableauDisques) {
    let htmlDuTableauAInjecterDansLaPage = creerHTMLDuTableauDesDisques(tableauDisques);

    injecterCodeHTMLDansLeTableau(htmlDuTableauAInjecterDansLaPage);
}

function injecterCodeHTMLDansLeTableau(htmlDuTableau) {
    document.getElementById("disquesTableBody").innerHTML = htmlDuTableau;
}


function creerHTMLDuTableauDesDisques(tableauDeDisques) {

    let tableauDeTR = tableauDeDisques.map(creerTRHtml);
    let trColles = tableauDeTR.join("");
    return trColles;

}

function creerTRHtml(disque) {
    return `<tr>
            <td>${disque.artiste}</td>
            <td>${disque.annee}</td>
            <td>${disque.album}</td>
            </tr>`

}

// DEMARRAGE DU SCRIPT QUAND LA FENETRE A FINIT DE CHARGER

window.onload = demarrer;