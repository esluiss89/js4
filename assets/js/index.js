let html = ''

cantidadCuartos.value = 1
minMetros.value = 0
maxMetros.value = 9999
checkOmas.checked = true

cantidad = parseInt(cantidadCuartos.value)
min = parseInt(minMetros.value)
max = parseInt(maxMetros.value)
cargar(cantidad, min, max)