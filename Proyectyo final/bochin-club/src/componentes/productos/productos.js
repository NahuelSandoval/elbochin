import React, { useState } from 'react'
import Plantilla from './Plantilla/Plantilla';
import "./productos.css"

const ProductosEnVenta = () => {

    const [productos] = useState([
        {
            name: 'Buzo',
            precio: 1500,
            id: 1,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Campera',
            precio: 2200,
            id: 2,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Conjunto',
            precio: 3800,
            id: 3,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Gorro',
            precio: 800,
            id: 4,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Taza',
            precio: 450,
            id: 5,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Bufanda',
            precio: 800,
            id: 6,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Llavero',
            precio: 300,
            id: 7,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'Chomba',
            precio: 1500,
            id: 8,
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
    ]);

    /*     const figuritasHTML = document.getElementById('figuritas')
    
        const plantilla = (jugador) => {
            return `<div class="caja">
                        <h2>${jugador.name}</h2>
                        <img src="${jugador.thumbnail}" class="foto" >
                        <p>precio: ${jugador.precio}</p>
                        <p>id: ${jugador.id}</p>
                        <button id = '${jugador.name}' class = 'btnCompra'> Comprar </button> 
                    </div>`
        }
        for (jugador of jugadores) {
            figuritasHTML.innerHTML += plantilla(jugador)
        }
        let botones = document.getElementsByClassName('btnCompra')
        console.log(botones);
    
        for (const boton of botones) {
            boton.addEventListener('click', function () {
                let seleccion = jugadores.find(jugador => jugador.name == this.id);
                console.log('El jugador es ' + seleccion.name);
            })
        } */
    return (
        <main>
            <h2>Tienda de regalos</h2>
            <section id="figuritas">
                {productos.map((producto) => {
                    return (
                        <Plantilla key={producto.id} name={producto.name} thumbnail={producto.thumbnail} precio={producto.precio} id={producto.id} />
                    );
                })}
            </section>
        </main>
    )
}

export default ProductosEnVenta