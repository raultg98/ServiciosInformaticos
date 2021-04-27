const cambia = document.querySelectorAll('.cambia');

// BOTONES
const botonBasico = document.getElementById('basico');
const botonStandard = document.getElementById('standard');
const botonPremium = document.getElementById('premium');

basico = ['Básico', '900€','Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus  corporis vel maxime at. Perferendis, repellat deserunt, voluptate a commodi molestias voluptatem ad veritatis distinctio alias minus vero, asperiores voluptatibus',
          'fa-check', 'fa-check', 'fa-check', 'fa-times', 'fa-times', 'fa-times', '1', '7 días'];
standard = ['Standar', '2500€','Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus  corporis vel maxime at. Perferendis, repellat deserunt, voluptate a commodi molestias voluptatem ad veritatis distinctio alias minus vero, asperiores voluptatibus',
            'fa-check', 'fa-check', 'fa-check', 'fa-check', 'fa-times', 'fa-times', '2', '14 días'];
premium = ['Premium', '5000€','Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus  corporis vel maxime at. Perferendis, repellat deserunt, voluptate a commodi molestias voluptatem ad veritatis distinctio alias minus vero, asperiores voluptatibus',
           'fa-check', 'fa-check', 'fa-check', 'fa-check', 'fa-check', 'fa-times', '+5', '2-3 meses'];


botonBasico.addEventListener('click', ()=>{
    for(let i=0; i<basico.length; i++){

        if(basico[i] === 'fa-check'){
      
            if(basico[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-check');
            }

        }else if(basico[i] === 'fa-times'){
            if(basico[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-times text-danger');
            }
        }else{
            cambia[i].innerText = basico[i];
        }
    }
})

botonStandard.addEventListener('click', ()=>{
    for(let i=0; i<standard.length; i++){
 
        if(standard[i] === 'fa-check'){
            
            if(basico[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-check');
            }

        }else if(standard[i] === 'fa-times'){
            if(standard[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-times text-danger');
            }
        }else{
            cambia[i].innerText = standard[i];
        }
    }
})

botonPremium.addEventListener('click', ()=>{
    for(let i=0; i<premium.length; i++){
        
        if(premium[i] === 'fa-check'){
            
            if(premium[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-check');
            }

        }else if(premium[i] === 'fa-times'){
            if(premium[i] !== cambia[i]){
                cambia[i].removeAttribute('class');
                cambia[i].setAttribute('class', 'fa fa-times text-danger');
            }
        }else{
            cambia[i].innerText = premium[i];
        }
    }
})


// tick: fa-check
// Cruz: fa-times