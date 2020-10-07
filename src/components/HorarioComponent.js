import React from 'react';
import cursoColor from '../resources/cursoColor';

let key1 = null;
let key2 = null;

const Horario = (props)=>{
   
    //const classCurso = new cursoColor(props.nombresCursosSeleccionados);
    //console.log(classCurso)
    /*
    useEffect(()=>{
        if(true/*props.focusAble){
            
            if(inputEl.current){
                inputEl.current.focus();
            }
            }
        }
    )
    */
    console.log('Show horario')
    console.log(props.showHorario)
    console.log('Opcion seleccionada')
    console.log(props.opcionSelect)
    if(/*props.render &&*/props.showHorario && props.opcionSelect != null){
        let classCurso = new cursoColor(props.cursosSeleccionados);
        return(
            <div className = "row panel-horario">
                <div className = "horario-header"><h4>HORARIO</h4>
                    <div className = "info">
                        <div className = "info-t">Teoría</div>
                        <div className = "info-p">Práctica</div>
                        <div className = "info-oc">Cruce</div>
                    </div>
                </div>
                <div id = "grid-horario" tabIndex = "1">
                    <div className = "day" >Horas</div>
                    <div className = "day" >LUNES</div>
                    <div className = "day" >MARTES</div>
                    <div className = "day" >MIERCOLES</div>
                    <div className = "day" >JUEVES</div>
                    <div className = "day" >VIERNES</div>
                    <div className = "day" >SABADO</div>
                    
                    {
                        
                        props.opcionSelect[2].map((arrayDia,indexHora)=>{

                            if(indexHora >=7 && indexHora <= 22){ //22 veces
                                key1 = indexHora.toString();
                                
                                return(
                                    <React.Fragment key={"group" + key1}>
                                        <div id = {indexHora}  key = {key1} className = "hora">{indexHora}:00- {indexHora +1}:00</div>
                                        {
                                            arrayDia.map((dia,indexDia)=>{
                                                if(indexDia >= 1 && indexDia<= 6){
                                                    key2 = indexDia.toString();
                                                    if(dia.length === 0){
                                                        return(
                                                            <div key = {key2 + key1} className = "c-emp"></div>
                                                        )
                                                    }
                                                
                                                    if(dia.length === 1){
                                                        let claseCurso = classCurso.classCurso(dia[0][0]);
                                                        if(dia[0][2] === 1){
                                                            return (
                                                                <div key = {key2 + key1}><div className = {"teoria " + claseCurso}>{dia[0][0]} ({dia[0][1]})</div></div>
                                                            )
                                                        }
                                                        if(dia[0][2] === 2){
                                                            return (
                                                                <div key = {key2 + key1}><div className = {"practica " + claseCurso}>{dia[0][0]} ({dia[0][1]})</div></div>
                                                            )
                                                        }
                                                    }
                                                    return(
                                                        <div className = "oc">
                                                            {
                                                                dia.map((curso,index)=>{
                                                                    let claseCurso = classCurso.classCurso(curso[0]);
                                                                    if(curso[2] === 1){
                                                                        return (
                                                                            <div key = {key2 + key1} className = {"teoria " + claseCurso}>{curso[0]} ({curso[1]})</div>
                                                                        )
                                                                    }
                                                                    if(curso[2] === 2){
                                                                        return (
                                                                            <div key = {key2 + key1} className = {"practica " +  claseCurso}>{curso[0]} ({curso[1]})</div>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                
                                                }})
                                        }
                                    </React.Fragment>
                                    
                                )
                            
                        }
                    })
                    }
                </div>
            </div>
    
        )
    }else return(<div></div>)
    
    
}
export default Horario;