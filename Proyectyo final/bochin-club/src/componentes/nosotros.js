import React from 'react';
import CarouselEjemploDos from './carousel/carouselNosotros';

const Nosotros = () => {
    return (
        <main>
            <h2>Nuestro Club</h2>
            <p class="text-center">
                Nuestra humilde club, desde su creación en 1950, ha trabajado con los vecinos de la comunidad y el municio para llevar toda clase de eventos y actividades.
            </p>
            <p class="text-center">
                Gracias a la gestión del municipio, hoy contamos con un salon para eventos, para uso de cualquier socio y no socio.
            </p>
            <p class="text-center">
                En las imagenes se pueden ver los torneos amistosos, festejos de socios, y el salón de usos múltiples.
            </p>
            <p class="text-center">
                Se dan clases de salsa, rumba, pilates.
            </p>
            <CarouselEjemploDos />
        </main>
    )
}
export default Nosotros