import React from "react";
import HeladoLocal from "./HeladoLocal";
/**
 * 
 */
const PrecioHelado=()=>(
    <div className="PrecioHelado">
        <div>
            <h2>listado del Helado</h2>
        </div>
        <div>
           
        </div>
        <div>
            <HeladoLocal nombreHelado="BOMBONES" precio="S/5.00" des="helado-donofrio-grand-prix-bombones"></HeladoLocal>
            <HeladoLocal nombreHelado="PRINCESA" precio="S/7.00" des="Helado de crema sabor chocolate y maní con cobertura sabor chocolate con leche."></HeladoLocal>
            <HeladoLocal nombreHelado="FRIO RICO" precio="S/8.00" des="DONOFRIO HELADOS FRIO RICO X 130 ML. CAPUCCINO"></HeladoLocal>
            <HeladoLocal nombreHelado="MOROCHA" precio="S/6.00" des="postre-helado-donofrio-morochas-con-chocolate-trozos-de-"></HeladoLocal>
            

        </div>
    
    </div>
    
);
export default PrecioHelado;  