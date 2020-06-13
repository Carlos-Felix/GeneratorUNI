import React from 'react'
import './styles.css'

const SelectionPanel= React.forwardRef((props,ref)=>{
    return(
        <>
        <div id = "panel-cursos-seleccionados">
            <div id = "panel-cursos" >
                { 
                    props.selectedCursos.map((d,index)=>{
                        return(
                            
                            <div className = "selected-curso-task">
                            <div className = "text-curso-task">
                                  {d}
                          </div>
                          <i className = "icon-cross-task"
                            onClick={(e)=>{
                                e.stopPropagation();
                                e.preventDefault();
                                props.triggerDelete(d,index);
                             }}
                          ></i>
                          </div>
                        )
                    })
                }

            </div>
            
            <div id = "cont-btn-Generar-Quitar">
                <button type="button" id = "btn-Generar" onClick = {props.handleGenerar}>Generar</button>
                
            </div>
              
        </div>
        
        </>
    )
})
export default SelectionPanel;
/*<select id = "cursos-seleccionados" size="20" ref = {ref}>
                { 
                    props.selectedCursos.map((d)=>{
                        return(
                            <option>{d}</option>
                        )
                    })
                }
            </select><img src={require("../../images/cancel.svg")}/><button type="button" id = "btn-Quitar" onClick = {props.handleQuitar}>Quitar Curso</button>*/