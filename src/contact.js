import {deleteChildren} from './helpers'

export default function contactF(parent) {
    let contactDiv = document.createElement('div');

    let phoneHeader = document.createElement('h1');
    phoneHeader.innerText = 'Phone';

    let phoneContent = document.createElement('p');
    phoneContent.innerText = '510-996-8080';

    contactDiv.appendChild(phoneHeader);
    contactDiv.appendChild(phoneContent);

    deleteChildren(parent);
    parent.appendChild(contactDiv);
}