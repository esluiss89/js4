btnBuscar.addEventListener("click", () => {

    cantidad = parseInt(cantidadCuartos.value)
    min = parseInt(minMetros.value)
    max = parseInt(maxMetros.value)
    html = ''
    cargar(cantidad, min, max)
  })