import React, { useEffect, useRef } from 'react'
import './styles.css'


const OptionPanel = React.forwardRef((props,ref)=>{
    const inputEl = useRef(null);
    
    /*
    useEffect(()=>{
        
        if(props.listOpc.length > 0){
            
            inputEl.current.focus();
            }
            
        }
        )*/
    return(
        <>
            <div id = "grid-cont-panel">
                <div id="cont-cont-panel-opc">
                    <div id = "cont-panel-opc">
                        <div id = "panel-opc" onChange = {props.handleSelectOpcion} ref = {ref}>
                            { 
                                props.listOpc.map((d,index)=>{
                                    if(index == 0){
                                        return(
                                            <div className = "option">
                                                <input type="radio" defaultChecked name="opciones" value= {index}></input> {d[0]} </div>
                                        )
                                    }
                                    return(
                                        <div className = "option">
                                            <input type="radio" name="opciones" value= {index}></input> {d[0]} </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div id = "cont-btn-crear-horario">
                    <button id = "btn-crear-horario" onClick = {props.handleVerHorario} ref = {inputEl}>Ver Horario</button>
            </div>
            
        </>
    )
});

export default OptionPanel;