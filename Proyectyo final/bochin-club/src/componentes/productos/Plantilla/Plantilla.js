import React from 'react'

const Plantilla = (jugador) => {
    return <div class="caja">
                <h2>{jugador.name}</h2>
                <img src={jugador.thumbnail} class="foto" />
                <p>edad: {jugador.edad}</p>
                <p>pais: {jugador.pais}</p>
                <button id = '${jugador.name}' class = 'btnCompra'> Comprar </button> 
            </div>
}

export default Plantilla