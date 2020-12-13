import {deleteChildren} from './helpers'

export default function menuF(subPage) {
    let menu = document.createElement('div');
    
    let potatoes = document.createElement('h1');
    potatoes.innerText = 'potatoes 6.99';
    menu.appendChild(potatoes);

    let sauce = document.createElement('h1');
    sauce.innerText = 'sauce 1.99';
    menu.appendChild(sauce);

    let cashews = document.createElement('h1');
    cashews.innerHTML = 'cashews 10.99';
    menu.appendChild(cashews);

    deleteChildren(subPage);
    subPage.appendChild(menu);
}