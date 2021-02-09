import React, { useState } from "react";
import Pantalla from "./Pantalla"; 
import Botones from "./Botones";
import Record from './Record';
//import Menu from "./Menu";



function Cronometro() {
    
    // hooks useState

    // useState para manejar variables para controlar el tiempo 
    const [tiempo, setTiempo]= useState({ms:0, s:0, m:0, h:0});
    // useState para manejar el varlor de setInterval
    const [interv, setInterv]= useState ();

    const [grabar,setGrabar]= useState([]);

    // Variables ṕara cambiar el valor de ms, s, m, h
    let actualizarMs = tiempo.ms, actualizarS = tiempo.s, actualizarM = tiempo.m, actualizarH = tiempo.h;

    const Iniciar =() =>{
        Correr ();
        setInterv (setInterval (Correr,10));
    }


    const Correr =() =>{
        if (actualizarM == 60) {
            actualizarH ++;
            actualizarM = 0;
        }
        if (actualizarS == 60) {
            actualizarM ++;
            actualizarS = 0;
        }
        if (actualizarMs == 100) {
            actualizarS ++;
            actualizarMs = 0;
        }
        
        actualizarMs ++;
        
        return setTiempo({ms:actualizarMs, s:actualizarS, m:actualizarM, h:actualizarH})
        
    }

    const Detener =() => {

        clearInterval(interv);
    }

    const Reiniciar =() => {

        clearInterval (interv);
        setTiempo({ms:0, s:0, m:0, h:0})
    }
    const Grabar =() => {
        
      setGrabar([
          
        ...grabar,
        {
        id:grabar.length,  
        tiempo:`${actualizarH} : ${actualizarM} : ${actualizarS} : ${actualizarMs}`
    
        }])
        

    }



    return(
       <div>
           <Pantalla tiempo  = {tiempo}  />
           <Botones  Iniciar = {Iniciar} Detener = {Detener} Reiniciar = {Reiniciar}  Grabar = {Grabar} />
           <Record   grabar  = {grabar} />
        </div>
    )

}



export default Cronometro;