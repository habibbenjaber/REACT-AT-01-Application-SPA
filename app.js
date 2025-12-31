
App();


// Interface de l'application
function App() {
    // Sélectionner la balise <div> avec id="root" : 
    // elle contiendra toutes les interfaces de l’application SPA.
    const root = document.getElementById('root');

    // Créez une <div> qui accueillera tout le contenu des différentes pages 
    // de l’application : Accueil, Services et Conyact
    const pageContenu = document.createElement("div");
    pageContenu.innerHTML = "Rendu des pages : Accueil, Services et Contact"

    //Ajouter l'Entete de la page dans root
    root.appendChild(Entete());

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
 */
function Entete() {
    //----- 1.. Créer l'élément HTML <div> #entete 
    let divEntete = document.createElement('div');
    divEntete.id = "entete";

    //----- 2.. Creer La barre de navigation 
    divEntete.appendChild(BarreNavigation());

    //----- 4.. Rendu de la fonction Entete 
    return divEntete;
}

/**
 * Crée la barre de navigation de l’application.
 *
 * Cette fonction génère les éléments du menu de navigation (liens ou boutons)
 * permettant à l’utilisateur de naviguer entre les différentes pages de l’application.
 * Chaque action de navigation déclenche le changement du contenu affiché
 * dans le conteneur principal de la page.
 */
function BarreNavigation() {
    //----- 1.. List des liens de navigation
    const links = [
        { name: 'Accueil', page: 'accueil' },
        { name: 'Services', page: 'services' },
        { name: 'Contact', page: 'contact' }
    ];


    //----- 2..  Création de la structure de la barre de navigation
    const nav = document.createElement('nav');
    // Création de la list de navigation
    const ul = document.createElement('ul');
    // Création des éléments de la list avec les liens
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.name;
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);

    //----- 3.. Rendu de la fonction BarreNavigation
    return nav;
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

    //----- 2.. Création du contenu du pied de page
    const p = document.createElement('p');
    p.textContent = '© 2025 Mon Application SPA';
    divPiedPage.appendChild(p);

    // ----- 3.. Rendu de la fonction PiedPage 
    return divPiedPage;
}