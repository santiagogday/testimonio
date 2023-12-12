import "./styles.css"
import { useState } from "react"

const Contador = () => {

    const [numero ,nuevoNumero] = useState(0)

    return(
        <div className="contenedor">
            <div className="numero">{`${numero}`}</div>
            <button className="contador"
            onClick={()=>nuevoNumero(numero+1)} >Click</button>
        </div>
    )
}

export default Contador