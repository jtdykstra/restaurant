import homeF from './home'
import contactF from './contact'
import menuF from './menu'

export default function createNavigation(subPage) {
    let navigation = document.createElement('div');
    navigation.id = 'navigation';

    let home = document.createElement('input');
    home.id = "home";
    home.type = 'radio';
    home.addEventListener('click', homeHandler);
    navigation.appendChild(home);

    let homeLabel = document.createElement('label');
    homeLabel.setAttribute('for', 'home');
    homeLabel.innerText = 'home';
    navigation.appendChild(homeLabel);

    let menu = document.createElement('input');
    menu.id = 'menu'
    menu.type = 'radio';
    menu.addEventListener('click', menuHandler);
    navigation.appendChild(menu);
    
    let menuLabel = document.createElement('label');
    menuLabel.setAttribute('for', 'menu');
    menuLabel.innerText = 'menu';
    navigation.appendChild(menuLabel);

    let contact = document.createElement('input');
    contact.id = 'contact';
    contact.type = 'radio';
    contact.addEventListener('click', contactHandler);
    navigation.appendChild(contact);

    let contactLabel = document.createElement('label');
    contactLabel.setAttribute('for', 'contact');
    contactLabel.innerText = 'contact';
    navigation.appendChild(contactLabel);
    
    function homeHandler(e) {
        e.preventDefault();
        console.log("home")
        homeF(subPage);
    }

    function menuHandler(e) {
        e.preventDefault();
        console.log("menu")
        menuF(subPage);
    }

    function contactHandler(e) {
        e.preventDefault();
        console.log("contact")
        contactF(subPage);
    }

    return navigation;
}

