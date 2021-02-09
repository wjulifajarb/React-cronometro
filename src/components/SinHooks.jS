
//     constructor(props){
//         super(props);
//         this.state = {
//             timerStarted: false,
//             timerStopped: true,
//             horas: 0,
//             minutos: 0,
//             segundos: 0,
//             capturas: []

//         }
//     }

//     handleTimerStart(e) {
//         e.preventDefault();
//         if(this.state.timerStopped) {
//             setInterval(() => {
//                 this.setState({timerStarted: true, timerStopped: false});
//                 if(this.state.timerStarted) {
//                     if(this.state.segundos >= 60) {
//                         this.setState((prevState) => ({minutos:prevState.minutos +1, segundos:0}));
//                     }
//                     if(this.state.minutos >= 60 ){
//                         this.setState((prevState) => ({ horas:prevState.horas +1, minutos: 0, segundos: 0}));
//                     }
//                     this.setState((prevState) => ({ segundos: prevState.secondos + 1 }));
//                 }

//             }, 1000);
//         }
//     }

//     handleTimerStop(e){
//         e.preventDefault();

//         this.s
//     }

//     render (){
//         return(
//             <div className = "contenedor">
                
//                 <div className = "timer-container">
//                 <div className = "current-timer">
//             </div>

//             {this.state.horas + ":" + this.state.minutos + ":" + this.state.segundos}

//             <div className = "timer-controls">
//                 <button className = "btn-start" onClick ={this.handleTimerStart.bind(this)}>Iniciar</button>
//                 <button className = "btn-stop" onClick ={this.handleTimerStop(this)}>Detener</button>
//                 <button className = "btn-record">Grabar</button>
//                 <button className = "btn-rest">Reiniciar</button>
//                 </div>
//               </div>
//             </div>

//         );
//     }