let filtroBtn = document.querySelectorAll(".main__navigation--btn");
let filtroPicture = document.querySelectorAll(".main__picture");
let filtroArticulo = document.querySelectorAll(".main__planetsInfo__item");

filtroBtn.forEach((boton) => {
  boton.onclick = () => {
    filtroBtn.forEach((cta) => cta.classList.remove("active"));
    boton.classList.add("active");

    let dataFilterPicture = boton.getAttribute("data-box");

    filtroPicture.forEach((items) => {
      items.classList.remove("active");
      items.classList.add("hide");

      if (items.getAttribute("data-box") == dataFilterPicture) {
        items.classList.add("active");
        items.classList.remove("hide");
      }
    });

    let dataFilter = boton.getAttribute("data-box");

    filtroArticulo.forEach((caja) => {
      caja.classList.remove("active");
      caja.classList.add("hide");

      if (caja.getAttribute("data-box") == dataFilter) {
        caja.classList.add("active");
        caja.classList.remove("hide");
      }
    });
  };
});
