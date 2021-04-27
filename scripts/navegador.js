const contenedor = document.querySelector('.contenedor');
const subContenedor = document.querySelector('.subContenedor');
const primerHijoContenedor = contenedor.firstChild;

// Otros componentes


let fragmento = document.createDocumentFragment();

const navegador = document.createElement('nav');
navegador.setAttribute('class', 'nav');

// BOTON HAMBURGUESA
const inputHamburguesa = document.createElement('input'); 
const labelHamburguesa = document.createElement('label');
const spanInputHamburguesa = document.createElement('span');

inputHamburguesa.setAttribute('type', 'checkbox');
inputHamburguesa.setAttribute('id', 'menu-hamburguesa');
labelHamburguesa.setAttribute('for', 'menu-hamburguesa');  

spanInputHamburguesa.setAttribute('class', 'icon-menu');

labelHamburguesa.appendChild(spanInputHamburguesa);

navegador.appendChild(labelHamburguesa);
navegador.appendChild(inputHamburguesa);

// TITULO
const titulo = document.createElement('p');
titulo.setAttribute('class', 'nav-titulo');
titulo.innerText = 'Servicios Informáticos';

navegador.appendChild(titulo);

/**** MENU DESPLEGABLE *****/
const navDesplegable = document.createElement('div');
navDesplegable.setAttribute('class', 'nav-desplegable');

// LOGO
const logo = document.createElement('img');
logo.setAttribute('src', '../../img/logo.jpg');
logo.setAttribute('class', 'mx-auto d-block nav-logo');
// logo.setAttribute('class', 'nav-logo');
// rounded mx-auto d-block

navDesplegable.appendChild(logo);

// DESCRIPCION
const descripcion = document.createElement('p');
descripcion.setAttribute('class', 'nav-descripcion');
descripcion.innerText  = 'Un equipo multiplinar de amplia experiencia en la industria';

navDesplegable.appendChild(descripcion);

// ICONOS
const cajaIconos = document.createElement('div');
cajaIconos.setAttribute('class', 'nav-iconos');

const listaIconos = document.createElement('ul');

// Listas de los iconos que utilizo y de enlaces a los que redirigen.
let enlacesNavegador = ['https://twitter.com/?lang=es', 'https://es-es.facebook.com/', 'https://es.linkedin.com/', 
                        'https://es.linkedin.com/', 'https://codepen.io/'];
let iconosNavegador = ['icon-twitter', 'icon-facebook', 'icon-linkedin2', 'icon-stackoverflow',
                       'icon-codepen'];

// Creamos mediante un bucle la lista de todos los li con sus correspondientes enlaces y iconos.

for(let i=0; i<enlacesNavegador.length; i++){
    const li = document.createElement('li');
    const enlaceIconos = document.createElement('a');
    enlaceIconos.setAttribute('href', enlacesNavegador[i]);
    enlaceIconos.setAttribute('target', '_blank')

    const icono = document.createElement('span');
    icono.setAttribute('class', iconosNavegador[i]);

    enlaceIconos.appendChild(icono);
    li.appendChild(enlaceIconos);
    listaIconos.appendChild(li);
}

cajaIconos.appendChild(listaIconos);
navDesplegable.appendChild(cajaIconos);

// HR
const linea = document.createElement('hr');
linea.setAttribute('class', 'nav-linea');

navDesplegable.appendChild(linea);

// MENU
const cajaMenu = document.createElement('div');
const listaMenu = document.createElement('ul');

cajaMenu.setAttribute('class', 'menu');

const enlacesMenu = ['../../index.html', '/webs/proyectos.html', '/webs/serviciosYprecios.html', 
                     '/webs/presentacionCoorporativa.html', '/webs/blog.html', '/webs/contacto.html', 
                     '#', '#', '#'];
const iconosMenu = ['icon-user', 'icon-display', 'icon-briefcase', 'icon-file-text2', 
                    'icon-blogger', 'icon-address-book', 'icon-compass'];
const liContenido = [' La empresa', ' Proyectos', ' Servicios & Precios', ' Presentación Coorporativa', ' Blog',
                     ' Contacto', ' Más Páginas', 'Ejemplos detalles proyecto', 
                     'Blog una columna', 'Ejemplo Artículo Blog'];

// bucle para crear todos los elementos de la lista.
for(let i=0; i<7; i++){
    const liMenu = document.createElement('li');
    const enlaceMenu = document.createElement('a');
    const spanMenu = document.createElement('span');

    enlaceMenu.setAttribute('href', enlacesMenu[i]);
    spanMenu.setAttribute('class', iconosMenu[i]);
    spanMenu.innerText = liContenido[i];

    enlaceMenu.appendChild(spanMenu);
    liMenu.appendChild(enlaceMenu);

    // MENU DESPLEGABLE
    if(i === 6){
        const ulMenuDesplegable = document.createElement('ul');
        
        for(let j=0; j<3; j++){
            const liMenuDesplegable = document.createElement('li');
            const enlaceMenuDesplegable = document.createElement('a');

            enlaceMenuDesplegable.setAttribute('href', enlacesMenu[i]);
            enlaceMenuDesplegable.innerText = liContenido[(i+j)];

            liMenuDesplegable.appendChild(enlaceMenuDesplegable);
            ulMenuDesplegable.appendChild(liMenuDesplegable);

        }

        liMenu.appendChild(ulMenuDesplegable);
    }

    listaMenu.appendChild(liMenu);
}

cajaMenu.appendChild(listaMenu);
navDesplegable.appendChild(cajaMenu);

// BOTON CONTACTAR
const divBotonContactar = document.createElement('div');
const enlaceContactar = document.createElement('a');
const spanContactar = document.createElement('span');

divBotonContactar.setAttribute('class', 'text-center my-4');
enlaceContactar.setAttribute('class', 'btn nav-boton');
enlaceContactar.setAttribute('href', '../webs/contacto.html');
spanContactar.setAttribute('class', 'icon-arrow-right');
spanContactar.innerText = ' Contactar';

enlaceContactar.appendChild(spanContactar);
divBotonContactar.appendChild(enlaceContactar);
navDesplegable.appendChild(divBotonContactar);

// HR-2
const linea2 = document.createElement('hr');
linea2.setAttribute('class', 'nav-linea');
navDesplegable.appendChild(linea2);

// MODO OSCURO
const letrasModoOscuro = document.createElement('p');
const spanModoOscuro = document.createElement('span');

letrasModoOscuro.setAttribute('class', 'letras-modoOscuro');
spanModoOscuro.setAttribute('class', 'icon-contrast');
spanModoOscuro.innerText = ' Modo Oscuro';

letrasModoOscuro.appendChild(spanModoOscuro);

navDesplegable.appendChild(letrasModoOscuro);

// BOTON MODO OSCURO
// const formulario = document.createElement('form');
const divOscuro = document.createElement('div');
const inputOscuro = document.createElement('input');
const labelOscuro = document.createElement('label');

divOscuro.setAttribute('class', 'switch');
inputOscuro.setAttribute('type', 'checkbox');
inputOscuro.setAttribute('id', 'check');
labelOscuro.setAttribute('for', 'check');

// divOscuro.setAttribute('class', 'custom-control custom-switch');
// inputOscuro.setAttribute('type', 'checkbox');
// inputOscuro.setAttribute('id', 'check');
// inputOscuro.setAttribute('class', 'custom-control-input');

// labelOscuro.setAttribute('for', 'check');
// labelOscuro.setAttribute('class', 'custom-control-label');

divOscuro.appendChild(inputOscuro);
divOscuro.appendChild(labelOscuro);
// formulario.appendChild(divOscuro);
// navDesplegable.appendChild(formulario);
navDesplegable.appendChild(divOscuro);


inputOscuro.addEventListener('click', (e)=>{
    /* 
        ESTILOS QUE TENGO QUE CAMBIAR:
            - COLOR DEL FONDO DEL NAVEGADOR ---------> DONE
            - COLOR DEL FONDO DEL SUBCONTENEDOR ----->
            - COLOR DEL BOTON DE CONTACTAR ----------> DONE
            - COLOR DE LA LISTA DE ICONOS (REDES) --->
            - COLOR DE LOS HR ----------------------->
    */
    if(inputOscuro.checked === true){
        navegador.style.backgroundColor = '#847b78';
        enlaceContactar.style.background = 'rgb(0, 255, 180)';
        linea.style.borderColor = 'white';
        linea2.style.borderColor = 'white';
        subContenedor.style.backgroundColor = '#3b302a';
        subContenedor.style.color = 'white';
    }else{
        navegador.style.backgroundColor = 'rgb(0, 255, 180)';
        enlaceContactar.style.background = '#085A4D';
        linea.style.borderColor = '#085A4D';
        linea2.style.borderColor = '#085A4D';
        subContenedor.style.backgroundColor = 'white';
        subContenedor.style.color = 'black';
    }
})


// Insertamos el fragmento de codigo antes del primer hijo, para que este fragmento 
// sea lo primero que salga

navegador.appendChild(navDesplegable);
fragmento.appendChild(navegador)
contenedor.insertBefore(fragmento, primerHijoContenedor);


/* lo de cambiar el estilo de el navegador de la empresa, tengo que
   utilizar el enlace web que me dice en que pagina estoy, y crear una
   funcion que nada mas cargar la pagina me cambie el color de esa letra*/