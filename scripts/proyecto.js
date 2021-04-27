const listaApp = document.querySelectorAll('.proyecto-app');
const listaFronted = document.querySelectorAll('.proyecto-fronted');
const listaBacked = document.querySelectorAll('.proyecto-backed');

/*****    MENU    *****/
const todos = document.getElementById('proyecto-menu__todos');
const prueba = document.querySelectorAll('.prueba');
const app = document.getElementById('proyecto-menu__app');
const fronted = document.getElementById('proyecto-menu__fronted');
const backed = document.getElementById('proyecto-menu__backed');


// POR DEFECTO, PONGO POR DEFECTO A 'TODOS' COMO EL DEFAULT. 
function inicio(){
    todos.style.color = "rgb(0, 255, 180)";
    todos.style.borderTop = "2px solid rgb(0, 255, 180)";
    // todos.style.fontWeight = 'bold';
}
inicio();

// FUNCION QUE ME RESETEA TODOS LOS ESTILOS DEL NAVEGADOR.
function resetear(){
    todos.style.color = 'black';
    todos.style.border = 'transparent';
    todos.style.fontWeight = 'normal';

    app.style.color = 'black';
    app.style.border = 'transparent';
    app.style.fontWeight = 'normal';

    fronted.style.color = 'black';
    fronted.style.border = 'transparent';
    fronted.style.fontWeight = 'normal';

    backed.style.color = 'black';
    backed.style.border = 'transparent';
    backed.style.fontWeight = 'normal';
}

// MOSTRAMOS TODOS LOS PROYECTOS
function mostrarTodo(){
    for(let i=0; i<listaApp.length; i++){
        listaApp[i].hidden = false;
    }

    for(let i=0; i<listaBacked.length; i++){
        listaBacked[i].hidden = false;
    }

    for(let i=0; i<listaFronted.length; i++){
        listaFronted[i].hidden = false;
    }
}

// OCULTAR LOS PROYECTOS, CADA UNO POR INDIVIDUAL
function ocultarApp(){
    for(let i=0; i<listaApp.length; i++){
        listaApp[i].hidden = true;
    }
}

function ocultarFronted(){
    for(let i=0; i<listaFronted.length; i++){
        listaFronted[i].hidden = true;
    }
}

function ocultarBacked(){
    for(let i=0; i<listaBacked.length; i++){
        listaBacked[i].hidden = true;
    }
}

// TODOS
todos.addEventListener('click', (e)=>{
    resetear();

    todos.style.color = "rgb(0, 255, 180)";
    todos.style.borderTop = "2px solid rgb(0, 255, 180)";
    todos.style.fontWeight = 'bold';

    mostrarTodo();
});

// APP
app.addEventListener('click', (e)=>{
    resetear();

    app.style.color = "rgb(0, 255, 180)";
    app.style.borderTop = "2px solid rgb(0, 255, 180)";
    app.style.fontWeight = 'bold';

    mostrarTodo();
    ocultarFronted();
    ocultarBacked();
});

// FRONTED
fronted.addEventListener('click', (e)=>{
    resetear();

    fronted.style.color = "rgb(0, 255, 180)";
    fronted.style.borderTop = "2px solid rgb(0, 255, 180)";
    fronted.style.fontWeight = 'bold';

    mostrarTodo();
    ocultarApp();
    ocultarBacked();
});

// BACKED
backed.addEventListener('click', (e)=>{
    resetear();

    backed.style.color = "rgb(0, 255, 180)";
    backed.style.borderTop = "2px solid rgb(0, 255, 180)";
    backed.style.fontWeight = 'bold';

    mostrarTodo();
    ocultarApp();
    ocultarFronted();
});