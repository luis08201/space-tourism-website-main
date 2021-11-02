let bulletBtn = document.querySelectorAll('.main__pagination--bullet');
let crewPicture = document.querySelectorAll('.main__picture');
let crewDescription = document.querySelectorAll('.main__crewDescription--item ');


bulletBtn.forEach(boton => {
    boton.onclick = () => {
        bulletBtn.forEach(cta => cta.classList.remove('active'));
        boton.classList.add('active');  
        
        let dataFilter = boton.getAttribute('data-box');

        crewDescription.forEach(caja => {
            caja.classList.remove('active');
            caja.classList.add('hide');

            if(caja.getAttribute('data-box') == dataFilter){
                caja.classList.add('active');
                caja.classList.remove('hide');
                
            }
        })

        let dataFilterPicture = boton.getAttribute('data-box');

        crewPicture.forEach(items => {
            items.classList.remove('active');
            items.classList.add('hide');

            if(items.getAttribute('data-box') == dataFilterPicture){
                items.classList.add('active');
                items.classList.remove('hide');                
            }
        })

    }
})