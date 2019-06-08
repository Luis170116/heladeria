import React from "react";
import DetalleHelado from "./DetalleHelado";
import PrecioHelado from "./PrecioHelado";

/**
 * 
 */
const Contenedor = () => (
 <div className="contenedor">
    <div> Heladeria Luis</div>
    <div className="contenido">   
    <PrecioHelado></PrecioHelado>
        <DetalleHelado></DetalleHelado>
        
        </div>
     <div> 
         CREADO POR LUIS CACERES MEDRANO
        
         </div>   
    </div>


);
  
export default Contenedor;