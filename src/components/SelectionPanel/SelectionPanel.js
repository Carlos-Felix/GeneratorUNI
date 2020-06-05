import React from 'react'

const SelectionPanel= React.forwardRef((props,ref)=>{
    return(
        <>
        <div></div>
        <div id = "panel-cursos-seleccionados">
            <select id = "cursos-seleccionados" size="20" ref = {ref}>
                { 
                    props.list.map((d)=>{
                        return(
                            <option>{d}</option>
                        )
                    })
                }
            </select>
            <div id = "cont-btn-Generar-Quitar">
                <button type="button" id = "btn-Generar" onClick = {props.handleGenerar}>Generar</button>
                <button type="button" id = "btn-Quitar" onClick = {props.handleQuitar}>Quitar Curso</button>
            </div>
              
        </div>
        </>
    )
})
export default SelectionPanel;