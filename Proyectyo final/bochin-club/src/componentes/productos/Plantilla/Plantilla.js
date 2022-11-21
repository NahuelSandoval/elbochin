import React from 'react'
import "../productos.css"

const Plantilla = (producto) => {
    return <div className="caja">
                <h2>{producto.name}</h2>
                <img src={producto.thumbnail} className="foto" alt="producto"/>
                <p>precio: ${producto.precio}</p>
                <p>producto n°: {producto.id}</p>
                <button id = '{producto.name}' className = 'btnCompra'> Comprar </button> 
            </div>
}

export default Plantilla