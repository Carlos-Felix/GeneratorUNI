import React from 'react'
import '../css/SelectionPanel.css'
import cursoColor from '../resources/cursoColor'

const SelectionPanel= React.forwardRef((props,ref)=>{
    return(
        <>
        <div id = "panel-cursos-seleccionados">
            <div id = "panel-cursos" >
                { 
                    props.selectedCursos.map((d,index)=>{
                        return(
                            
                            <div key = {d + index} className = "selected-curso-task"/* + cursoColor.getClassColor(index)}*/>
                            <div  className = "text-curso-task">
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
                <button type="button" id = "btn-Generar" onClick = {props.handleGenerar}>GENERAR</button>
                
            </div>
              
        </div>
        
        </>
    )
})
export default SelectionPanel;