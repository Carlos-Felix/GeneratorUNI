import React, { useEffect, useRef } from 'react'
import '../css/OptionPanel.css'


const OptionPanel = React.forwardRef((props,ref)=>{
    const inputEl = useRef(null);    
    
    return(
        <>
            <div id = "grid-cont-panel">
                <div id="cont-cont-panel-opc">
                    <div id = "cont-panel-opc">
                        <div id = "panel-opc" onChange = {props.handleSelectOpcion} ref = {ref.panelOpc}>
                            { 
                                
                                props.listOpc.map((d,index)=>{
                                    
                                    if(index == 0){
                                        return(
                                            <div key = {d[0]} className = "option">
                                                <input type="radio" defaultChecked name="opciones" value= {index}></input> {d[0]} </div>
                                        )
                                    }
                                    return(
                                        <div key = {d[0]} className = "option">
                                            <input type="radio" name="opciones" value= {index}></input> {d[0]} </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div id = "cont-btn-crear-horario">
                    <button id = "btn-crear-horario" onClick = {props.handleVerHorario} ref = {ref.verHorarioButton} >VER HORARIO</button>
            </div>
        </>
    )
});

export default OptionPanel;