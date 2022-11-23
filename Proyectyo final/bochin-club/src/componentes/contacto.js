import React from "react";
import "./estilos/home.css"
import { useForm } from "react-hook-form"

const Contacto = () => {
    const { register, formState:{ errors} , handleSubmit} = useForm("");
const onSubmit = (data) => {
    console.log(data);
}


    return (

        <form onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/xyyvebag" className="form" method="post">

            <fieldset className="campos">
                <legend>Complete el formulario</legend>

                <label for="nombre">Nombre</label>
                <input type="text" {...register('nombre' ,{required:true})} name="nombre" id="nombre" placeholder="ingresa tu nombre" className="celda" />
{errors.nombre?.type ==='required' && <p>*Este campo es obligatorio</p>}
                <label for="apellido">Apellido</label>
                <input type="text" {...register('apellido' ,{required:true})} name="apellido" id="apellido" placeholder="ingresa tu apellido" className="celda" />
                {errors.apellido?.type ==='required' && <p>*Este campo es obligatorio</p>}
                
                <label for="telefono">Telefono de contacto</label>
                <input type="text" {...register('apellido' ,{required:true})} name="apellido" id="apellido" placeholder="ingresa tu apellido" className="celda" />
                {errors.apellido?.type ==='required' && <p>*Este campo es obligatorio</p>}
                
                
                <label for="correo">Email</label>
                <input type="email" {...register('correo',{pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} name="correo" id="correo" placeholder="ingresa tu email" className="celda" />

                <label for="fecha">Fecha de nacimiento</label>
                <input type="date" {...register('fecha')} name="fecha" id="fecha" className="celda" />

                <label for="mensaje">Escribi un mensaje</label>
                <textarea name="mensaje" {...register('mensaje')} id="mensaje" cols="25" rows="10" placeholder="Ingrese aquí su consulta"></textarea>

                <div className="socios">


                    <input type="radio" {...register('socio',{required:true})} name="socio" value="socio" />
                    <label for="socios">socio</label>

                    <input type="radio" {...register('socio',{required:true})} name="socio" value="no socio" />
                    <label for="socios">no socio</label>
                </div>

                <div className="terminos">
                    <input type="checkbox" name="acepta" id="acepta" value="1" required />
                    <label for="acepta">Acepta los terminos y condiciones </label>
                </div>

                <div className="botones">
                    <input type="submit" value="Enviar" />

                    <input type="reset" />

                </div>
            </fieldset>
        </form>
    )
}

export default Contacto
