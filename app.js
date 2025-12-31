
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

    Page('accueil', pageContenu)

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
function Entete(pageContenu) {
    //----- 1.. Créer l'élément HTML <div> #entete 
    let divEntete = document.createElement('div');
    divEntete.id = "entete";

    //----- 2.. Creer La barre de navigation 
    divEntete.appendChild(BarreNavigation(pageContenu));

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
function BarreNavigation(pageConteneur) {
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
        // Gestionnaire d’événements pour les clics sur la barre de navigation
        a.onclick = function () {
            // Appelle des fonctions qui génèrent le contenu des pages Accueil, Services et Contact.
            Page(link.page, pageConteneur);
        };
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

/**
 * Gère la navigation entre les pages de l’application.
 *
 * Cette fonction permet d’afficher dynamiquement le contenu de la page
 * **accueil**, **services** ou **contact** en fonction de la page demandée.
 * Le contenu correspondant est injecté dans le conteneur principal de l’application.
 *
 * @param {string} page - Le nom de la page à afficher. Valeurs possibles : "accueil", "services", "contact".
 * @param {HTMLElement} pageConteneur - L’élément HTML qui accueille le contenu des pages affichées.
 */
function Page(page, pageConteneur) {
    let divPageContenu;

    //---- 1.. creer le code de la page demandée
    if (page === 'accueil')
        divPageContenu = Accueil();
    else if (page === 'services')
        divPageContenu = Services();
    else if (page === 'contact')
        divPageContenu = Contact();

    divPageContenu.id = "pageContenu";

    //---- 2.. Vider le containeur 
    pageConteneur.innerHTML = "";

    //---- 3.. Injecter la nouvelle page 
    pageConteneur.appendChild(divPageContenu);
}

/**
 * Génère le contenu de la page Accueil.
 *
 * Cette fonction crée et affiche les éléments correspondant à la page d’accueil
 * de l’application (titre, texte de présentation, etc.) dans le conteneur fourni.
 */
function Accueil() {
    //----- 1.. Créer l'élément #divPage
    const divPage = document.createElement('div');

    //----- 2.. Créer le contenu de la page
    divPage.innerHTML = "Contenu de la page d'accueil";

    //----- 3.. Rendu de la fonction
    return divPage;
}

/**
 * Génère le contenu de la page Services.
 *
 * Cette fonction crée et affiche les éléments correspondant à la page Services
 * de l’application (liste des services, descriptions, etc.) dans le conteneur fourni.
 */
function Services() {
    //----- 1.. Créer l'élément #divPage
    const divPage = document.createElement('div');

    //----- 2.. Créer le contenu de la page
    divPage.innerHTML = "Contenu de la page Services";

    //----- 3.. Rendu de la fonction
    return divPage;
}


/**
 * Génère le contenu de la page Contact.
 *
 * Cette fonction crée et affiche les éléments correspondant à la page Contact
 * de l’application (formulaire, informations de contact, etc.) dans le conteneur fourni.
 */
function Contact() {
    //----- 1.. Créer l'élément #divPage
    const divPage = document.createElement('div');

    //----- 2.. Créer le contenu de la page
    divPage.innerHTML = "Contenu de la page Contact";

    //----- 3.. Rendu de la fonction
    return divPage;
}
