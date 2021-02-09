import React from "react"

function Botones (props) {
return (
    <div className = "grid-container">
        <button className = "btn-start" onClick ={props.Iniciar}>Iniciar</button>
        <button className = "btn-stop" onClick ={props.Detener}>Detener</button>
        <button className = "btn-record" onClick ={props.Grabar}>Grabar</button>
        <button className = "btn-rest" onClick ={props.Reiniciar}>Reiniciar</button>
    </div>
)
}

export default Botones;