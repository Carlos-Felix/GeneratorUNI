import React from 'react'
import ListCursos from './ListCursos'

const PanelCursos = (props)=>{

    return(
        <>
            <div id = "panel-lista-curso">
                <div></div>
                <div>
                    <select id = "faculty-list" size="1" onChange = {props.handleChangeFaculty}>
                        <option value = 'FC'>Ciencias</option>
                        <option value = 'FIIS'>FIIS</option>
                        <option value = 'FIM'>FIM</option>
                        <option value = 'FIEE'>FIEE</option>
                        <option value = 'FIQT'>FIQT</option>
                    </select>
                </div>
                            
                <div id = "cont-btn-Agregar">
                    <button type="button" id = "btn-Agregar" onClick = {props.handleAgregar}>Agregar</button>
                </div>
                <ListCursos 
                    listOfNames = {props.names} 
                    ref = {props.selectRef}
                />
            </div>
        </>

    )
}

export default PanelCursos;