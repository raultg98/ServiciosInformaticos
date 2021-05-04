function mostrarIconos(){
    const imagen = document.querySelectorAll('.imagen');

    for(let i=0; i<imagen.length; i++){
        let posIcon = imagen[i].getAttribute('id');
        
        let dondeEmpieza, dondeTermina;
        let TOTAL_PIXELES = 100*100;

        if(posIcon < 100){
            dondeEmpieza = posIcon*(-100);
            dondeTermina = (TOTAL_PIXELES + dondeEmpieza - 100)*(-1);

            imagen[i].style.margin = (dondeEmpieza +"px 0 "+ dondeTermina)+ "px 0";
        }else if(posIcon >= 100){
            posIcon -= 100;

            dondeEmpieza = posIcon*(-100);
            dondeTermina = (TOTAL_PIXELES + dondeEmpieza - 100)*(-1);

            imagen[i].style.margin = (dondeEmpieza +"px -200px "+ dondeTermina)+ "px -100px";
        }
    }
}


mostrarIconos();