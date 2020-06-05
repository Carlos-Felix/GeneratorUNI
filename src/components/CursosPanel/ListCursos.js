import React from 'react'

const ListCursos = React.forwardRef((props,ref)=>{
    return(
        <select id = "lista-cursos" size="10" ref = {ref}>
                  { 
                    props.listOfNames.map((d,index)=>{
                          if(index == 0){
                            return(
                                <option selected = "selected">{d}</option>
                              )
                          }
                          return(
                            <option >{d}</option>
                          )
                      })
                  }
        </select>
    )
})
export default ListCursos;