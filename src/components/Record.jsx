import React from 'react'

const Record = (props) => {
    return (
        <div>
            <ul className = "grabacion">
           {props.grabar.map(tiempo=>(
               <li key={tiempo.id}>{tiempo.tiempo}</li>
           ))}
            </ul>
        </div>
    )
}

export default Record;