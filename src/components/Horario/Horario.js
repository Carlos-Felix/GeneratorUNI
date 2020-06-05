import React, { useEffect, useRef } from 'react'
import './Horario.css'
import cursoColor from '../functions/cursoColor';


const Horario = React.forwardRef((props,ref)=>{
    const inputEl = useRef(null);
    const classCurso = new cursoColor(props.selectedC);

    useEffect(()=>{
        if(props.focusAble){
            
            if(inputEl.current){
                inputEl.current.focus();
            }
            }
        }
        )
    console.log(props.opcionSelect)
    
    if(props.render && props.array[props.opcionSelect] != null){
        return(
            <>
            <div className = "grid" tabIndex = "1" ref={inputEl}>
            <div>Horas</div>
            <div>Lunes</div>
            <div>Martes</div>
            <div>Miercoles</div>
            <div>Jueves</div>
            <div>Viernes</div>
            <div>Sabado</div>
            
            {
                
                props.array[props.opcionSelect][2].map((arrayDia,indexHora)=>{

                    if(indexHora >=7 && indexHora <= 22){ //22 veces
                        
                        return(
                            <>
                                <div>{indexHora}:00</div>
                                {
                                    arrayDia.map((dia,indexDia)=>{
                                        if(indexDia >= 1 && indexDia<= 6){
                                        if(dia.length == 0){
                                            return(
                                                <div></div>
                                            )
                                        }
                                        
                                        if(dia.length == 1){
                                            let claseCurso = classCurso.classCurso(dia[0][0]);
                                            if(dia[0][2] == 1){
                                                return (
                                                    <div><div className = "teoria" className = {"teoria " + claseCurso}>{dia[0][0]} ({dia[0][1]})</div></div>
                                                )
                                            }
                                            if(dia[0][2] == 2){
                                                return (
                                                    <div><div className = "practica" className = {"practica " + claseCurso}>{dia[0][0]} ({dia[0][1]})</div></div>
                                                )
                                            }
                                        }
                                        return(
                                            <div className = "oc">
                                                {
                                                    dia.map((curso,index)=>{
                                                        let claseCurso = classCurso.classCurso(curso[0]);
                                                        if(curso[2] == 1){
                                                            return (
                                                                <div className = "teoria" className = {"teoria " + claseCurso}>{curso[0]} ({curso[1]})</div>
                                                            )
                                                        }
                                                        if(curso[2] == 2){
                                                            return (
                                                                <div className = "practica" className = {"practica " +  claseCurso}>{curso[0]} ({curso[1]})</div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </div>
                                        )
                                        
                                    }})
                                }
                            </>
                            
                        )
                    
                }
            })
            }
    </div>
    
    </>
        )
    }
    
    
})
export default Horario;