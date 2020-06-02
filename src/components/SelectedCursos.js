import React from 'react'

const SelectedCursos= React.forwardRef((props,ref)=>{
    return(
        <select id = "cursos-seleccionados" size="20" ref = {ref}>
            { 
                    props.list.map((d)=>{
                          return(
                            <option>{d}</option>
                          )
                      })
                  }
        </select>
    )
})
export default SelectedCursos;