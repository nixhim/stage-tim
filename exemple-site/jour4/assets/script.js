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

function injecterCodeHTMLDansLeTableau(htmlDuTableau) {
    document.getElementById("disquesTableBody").innerHTML = htmlDuTableau;
}

function mettreAjourPageAvecTableauDeDisques(tableauDisques) {

    let htmlDuTableauAInjecterDansLaPage = creerHTMLDuTableauDesDisques(tableauDisques);

    injecterCodeHTMLDansLeTableau(htmlDuTableauAInjecterDansLaPage);

}

function demarrer() {

    direBonjour();
    mettreAjourPageAvecTableauDeDisques(mesDisques);

}

function direBonjour() {
    alert("Bonjour à tous les amis !");
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

function compareDisqueParAlbum(disque1, disque2) {
    // pour comparer du texte on utiliser 'localeCompare'
    return disque1.album.localeCompare(disque2.album);
}

function compareDisqueParArtiste(disque1, disque2) {
    return disque1.artiste.localeCompare(disque2.artiste);
}

function compareDisqueParAnnee(disque1, disque2) {
    // pour comparer des nombres on fait ainsi...
    return disque1.annee < disque2.annee ? -1 : +1;
}

function trierParAlbum() {
    // 'slice' : obligatoire pour faire une copier avant de trier (sinon pbms...)
    let tableauTrie = mesDisques.slice().sort(compareDisqueParAlbum);
    mettreAjourPageAvecTableauDeDisques(tableauTrie);
}

function trierParAnnee(tableauDeDisques) {
    // 'slice' : obligatoire pour faire une copier avant de trier (sinon pbms...)
    let tableauTrie = mesDisques.slice().sort(compareDisqueParAnnee);
    mettreAjourPageAvecTableauDeDisques(tableauTrie);
}

function trierParArtiste(tableauDeDisques) {
    // 'slice' : obligatoire pour faire une copier avant de trier (sinon pbms...)
    let tableauTrie = mesDisques.slice().sort(compareDisqueParArtiste);
    mettreAjourPageAvecTableauDeDisques(tableauTrie);
}

// DEMARRAGE DU SCRIPT QUAND LA FENETRE A FINIT DE CHARGER

window.onload = demarrer;