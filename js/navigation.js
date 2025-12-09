/**
 * This script builds the site navigation. 
 */

// Object constructor for navigation links
function NavLink(nodeText, href, id) {
    this.nodeText = nodeText;
    this.href = href;
    this.id = id;
}

// Instantiate NavLink constructor
const NAVHome = new NavLink('Home', 'index.html', 'navhome');
const NAVSkillSet = new NavLink('Skills', 'skillset.html', 'navskillset');
const NAVProjects = new NavLink('Projects', 'projects.html', 'navprojects');
const NAVAboutMe = new NavLink('About Me', 'aboutme.html', 'navaboutme');
const NAVContact = new NavLink('Contact', 'contactme.html', 'navcontact');

// Array of NavLink objects
ARRAY_NAVLinks = [
    NAVHome, NAVSkillSet, NAVProjects, NAVAboutMe, NAVContact
];

// Remove link from current page
function currentPage() {
    let currentURL = window.location.href; // assign currently loaded URL
    let classString = 'current-page'; // value to be used for class attribute
}

// This function builds the site navigation structure and is called after the page loads
function buildNav() {
    // Assemble nav and ul elements
    const NAV_CONTAINER = document.getElementById('navcontainer');
    NAV_CONTAINER.setAttribute('class', 'nav-container');
    const UL_CONTAINER = document.createElement('ul');

    // Assemble li and a elements using NAVLink constructor
    // NAVLink is represented by objLink callback
    ARRAY_NAVLinks.forEach(objLink => {
        // create li and a elements
        const LI_ELEMENT = document.createElement('li');
        const A_ELEMENT = document.createElement('a');
        
        // append text node to a element
        A_ELEMENT.appendChild(document.createTextNode(objLink.nodeText));

        // set a element attributes: id, href, and class
        A_ELEMENT.setAttribute('id', objLink.id);
        A_ELEMENT.setAttribute('href', objLink.href);
        A_ELEMENT.setAttribute('class', 'nav-text');

        // append a and li nodes as child elements
        LI_ELEMENT.appendChild(A_ELEMENT);
        UL_CONTAINER.appendChild(LI_ELEMENT);
    });

    NAV_CONTAINER.appendChild(UL_CONTAINER);
}

document.addEventListener("DOMContentLoaded", buildNav);