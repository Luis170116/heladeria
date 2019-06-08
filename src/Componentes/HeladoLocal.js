
import React from "react";

/**
 * 
 * @param {*} param0 
 */
const HeladoLocal=({nombreHelado,precio,des})=> {
    const mensaje = precio>""


    return (
        <div className="Detalle de Helado">
            <h3> HELADO: {nombreHelado}</h3>
            <span> Precio: {precio}</span>
            <h4> Descripcion: {des}</h4>
            <br/>
            
            
        </div>
    )
}
    
    
export default  HeladoLocal;