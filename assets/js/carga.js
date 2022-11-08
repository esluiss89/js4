function cargar() {
    let i = 0
    
    for (const propiedad of propiedadesJSON) {
      
      if (checkOmas.checked === false){ 

        if (propiedad.m >= min && propiedad.m <= max && cantidad === propiedad.rooms) {
          i++
          
          html += `
          <div class="propiedad" id="cardPropiedad">
                        <div class="img" id="cardImg" style="background-image: url('${propiedad.src}')"></div>
                        <section>
                            <h5 id="cardTitle">${propiedad.name}</h5>
                            <div class="d-flex justify-content-between">
                                <p id="cardCuartos">Cuartos: ${propiedad.rooms}</p>
                                <p id="cardMetros">Metros: ${propiedad.m}</p>
                            </div>
                            <p class="my-3" id="cardDescripcion">${propiedad.description}</p>
                            <button class="btn btn-info " id="cardButton">Ver más</button>
                        </section>
          </div>
          `
        }
      }

      if (checkOmas.checked === true){ 

        if (propiedad.m >= min && propiedad.m <= max && cantidad <= propiedad.rooms) {
          i++
          
          html += `
          <div class="propiedad" id="cardPropiedad">
                        <div class="img" id="cardImg" style="background-image: url('${propiedad.src}')"></div>
                        <section>
                            <h5 id="cardTitle">${propiedad.name}</h5>
                            <div class="d-flex justify-content-between">
                                <p id="cardCuartos">Cuartos: ${propiedad.rooms}</p>
                                <p id="cardMetros">Metros: ${propiedad.m}</p>
                            </div>
                            <p class="my-3" id="cardDescripcion">${propiedad.description}</p>
                            <button class="btn btn-info " id="cardButton">Ver más</button>
                        </section>
          </div>
          `
        }
      }

      spanTitle.textContent = i
    }
  
    divPropiedades.innerHTML = html
  }