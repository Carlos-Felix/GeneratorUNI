import React from 'react'
import ControlCursos from './ControlCursos'
import Logo from "../icon/four_leaves_logo.png";

const PanelCursos = (props)=>{

    return(
        <>
            <div id = "panel-lista-curso">
                <div id = "cont-faculty-list">
                    <select id = "faculty-list" size="1" onChange = {props.handleChangeFaculty}>
                        <option value = 'FC'>Ciencias</option>
                        <option value = 'FIIS'>FIIS</option>
                        <option value = 'FIM'>FIM</option>
                        <option value = 'FIEE'>FIEE</option>
                        <option value = 'FIQT'>FIQT</option>
                    </select>
                </div>
                            
                
                <ControlCursos 
                    listOfNames = {props.names} 
                    //ref = {props.selectRef}
                    handleInput = {props.handleInput}
                />
            </div>
            
            
        </>

    )
}

export default PanelCursos;
/*<div id = "cont-btn-Agregar"><div id = "logo"><img width = "230px" height = "230px" alt = "fourleaves" src ={Logo}/></div>
                    <button type="button" id = "btn-Agregar" onClick = {props.handleAgregar}>Agregar</button>
                </div>*/