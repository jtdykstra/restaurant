import {deleteChildren} from './helpers'

export default function homeF(parent) {

    let title = document.createElement('h1');
    title.innerText = "jordan's restaurant";

    let info = document.createElement('p');
    info.innerText = "This is my restaurant. I make weird stuff and then you eat it.";

    deleteChildren(parent);
    parent.appendChild(title);
    parent.appendChild(info);
}