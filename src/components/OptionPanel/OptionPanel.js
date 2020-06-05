import React from 'react'

const OptionPanel = React.forwardRef((props,ref)=>{
    return(
        <>
            <div></div>
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
            <div></div>
            <div></div>
            <div id = "cont-btn-crear-horario">
                    <button id = "btn-crear-horario" onClick = {props.handleVerHorario}>Ver Horario</button>
            </div>
            <div></div>
            <div></div>
            <div></div> 
        </>
    )
});

export default OptionPanel;