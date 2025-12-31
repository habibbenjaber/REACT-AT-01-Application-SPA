
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
 * @param {HTMLElement} PageConteneur - L'élément HTML qui contient le contenu principal.
 *                                       Il sera mis à jour dynamiquement selon la page sélectionnée.
 */
function Entete(pageConteneur) {
    //----- 1.. Créer l'élément HTML <div> #entete 
    let divEntete = document.createElement('div');
    divEntete.id = "entete";

    //----- 2..  Création de la structure de la barre de navigation
    const nav = document.createElement('nav');

    // Création de la list de navigation
    const ul = document.createElement('ul');

    // list des links de navigation
    const links = [
        { name: 'Accueil', page: 'accueil' },
        { name: 'Services', page: 'services' },
        { name: 'Contact', page: 'contact' }
    ];

    // Création des éléments de la list avec les liens
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = link.name;
        a.onclick = function () {
            Page(link.page, pageConteneur); // Appelle la fonction pour afficher la page correspondante
        };
        li.appendChild(a);
        ul.appendChild(li);
    });
    nav.appendChild(ul);

    //----- 3..  Inserer <nav> dans la balise divEntete
    divEntete.appendChild(nav);

    //----- 4.. Rendu de la fonction Entete 
    return divEntete;
}

// Élaborer la structure du pied de page de l’application. 
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