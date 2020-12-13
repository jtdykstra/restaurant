import createNavigation from './navigation'
import home from './home'

export default function pageInit() {
    let content = document.getElementById("content");

    let header = document.createElement('div');
    header.id = "header";
    content.appendChild(header);
    
    let subPage = document.createElement('div');
    subPage.id = 'subPage';

    content.appendChild(createNavigation(subPage));

    home(subPage);
    content.appendChild(subPage);
}



