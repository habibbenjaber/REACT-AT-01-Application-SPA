
App();


// Interface de l'application
function App() {
    // Sélectionner la balise <div> avec id="root" : 
    // elle contiendra toutes les interfaces de l’application SPA.
    const root = document.getElementById('root');

    // Créez une <div> qui accueillera tout le contenu des différentes pages 
    // de l’application : Accueil, Services et Conyact
    const pageContenu = document.createElement("div");
    pageContenu.innerHTML = "Contenu des pages : Accueil, Services et Contact"

    //Ajouter l'Entete de la page dans root
    root.appendChild(Entete(pageContenu));

    //Ajouter pageContenu dans root
    root.appendChild(pageContenu);

    //Ajouter le pied de page dans root
    root.appendChild(PiedPage());
}


/**
 * Crée la structure de l’en-tête et la barre de navigation de l'application.
 *
 * Cette fonction initialise l'en-tête de l'application et configure la barre de navigation.
 * Lorsque l'utilisateur sélectionne une page dans la barre de navigation, le contenu de
 * `PageConteneur` est mis à jour pour afficher la page correspondante.
 *
 */
function Entete() {
    //----- 1.. Créer l'élément HTML <div> #entete 
    let divEntete = document.createElement('div');
    divEntete.id = "entete";

    //----- 2.. Contenu de l'entete
    divEntete.innerHTML = "Ajouter ic le contenu de l'en-tête de la page"

    //----- 3.. Rendu de la fonction Entete 
    return divEntete;
}

/**
 * Crée la structure du pied de page de l’application.
 *
 * Cette fonction initialise le pied de page qui apparaîtra en bas de l'application.
 * Il peut contenir des informations telles que les crédits, les liens importants ou
 * toute autre information pertinente.
 */

function PiedPage() {
    //----- 1.. Créer l'élément #piedPage
    let divPiedPage = document.createElement('div');
    divPiedPage.id = "piedPage";

    //----- 2.. CContenu du pied de page
    divPiedPage.innerHTML = "Ajouter ic le contenu du pied de la page"

    // ----- 3.. Rendu de la fonction PiedPage 
    return divPiedPage;
}