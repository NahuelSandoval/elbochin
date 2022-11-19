import React, { useState } from 'react'
import Plantilla from './Plantilla/Plantilla';

const ProductosEnVenta = () => {

    const [jugadores , setJugadores] = useState ([
        {
            name: 'messi',
            edad: 37,
            pais: 'argentina',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'ronaldo',
            edad: 42,
            pais: 'portugal',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
        {
            name: 'mbappe',
            edad: 23,
            pais: 'francia',
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfjktLMLOISpBFpB0l5bX_IjBFvxH83utuA&usqp=CAU",
        },
    ]);

/*     const figuritasHTML = document.getElementById('figuritas')

    const plantilla = (jugador) => {
        return `<div class="caja">
                    <h2>${jugador.name}</h2>
                    <img src="${jugador.thumbnail}" class="foto" >
                    <p>edad: ${jugador.edad}</p>
                    <p>pais: ${jugador.pais}</p>
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

        <div>productos
        {jugadores.map((jugador) => {
            return (
                <Plantilla name={jugador.name} thumbnail={jugador.thumbnail} edad={jugador.edad} pais={jugador.pais}/>
            );
            })}
            </div>
    )
}

export default ProductosEnVenta