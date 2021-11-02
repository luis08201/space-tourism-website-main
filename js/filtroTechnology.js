let paginationBtn = document.querySelectorAll('.main__pagination--btn');
let technologyPicture = document.querySelectorAll('.main__picture');
let technologyArticle = document.querySelectorAll('.main__bannerDescription--item');


paginationBtn.forEach(boton => {
    boton.onclick = () => {
        paginationBtn.forEach(cta => cta.classList.remove('active'));
        boton.classList.add('active');  
        
        let dataFilter = boton.getAttribute('data-box');

        technologyArticle.forEach(caja => {
            caja.classList.remove('active');
            caja.classList.add('hide');

            if(caja.getAttribute('data-box') == dataFilter){
                caja.classList.add('active');
                caja.classList.remove('hide');
                
            }
        })

        let dataFilterPicture = boton.getAttribute('data-box');

        technologyPicture.forEach(items => {
            items.classList.remove('active');
            items.classList.add('hide');

            if(items.getAttribute('data-box') == dataFilterPicture){
                items.classList.add('active');
                items.classList.remove('hide');                
            }
        })

    }
});