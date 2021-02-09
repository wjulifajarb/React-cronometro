import React from "react";

function Pantalla (props){
    return(
    <div className = "grid-container">     
        <span id = 'screen' > {(props.tiempo.h > 9.9)? props.tiempo.h + " : " : "0" + props.tiempo.h + " : "} </span>
        <span id = 'screen'> {(props.tiempo.m > 9.9)? props.tiempo.m + " : " : "0" + props.tiempo.m + " : "} </span>
        <span id = 'screen'> {(props.tiempo.s > 9.9)? props.tiempo.s + " : " : "0" + props.tiempo.s + " : "} </span>
        <span id = 'screen'> {(props.tiempo.ms> 9.9)? props.tiempo.ms  : "0" + props.tiempo.ms  } </span> 
        
       
    </div>
    )
}

export default Pantalla


