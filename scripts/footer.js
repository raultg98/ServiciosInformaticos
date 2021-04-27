const body = document.querySelector('body');

let fragmento2 = document.createDocumentFragment();

const footer = document.createElement('footer');
const parrafo = document.createElement('p');

footer.setAttribute('class', 'footer');
parrafo.innerHTML = 'Copyright <span><i class="far fa-copyright"></i></span> <span class="text-success">Raúl Teixeira García</span>';

footer.appendChild(parrafo);
fragmento2.appendChild(footer);
body.appendChild(fragmento2);
