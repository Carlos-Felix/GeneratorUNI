import React from 'react';
import ControlPanel from './ControlPanelComponent';

const SelectionPanel= (props)=>{
  /*
    const createList = ()=>{
      let options = []
      props.cursosSeleccionados.map((d,index)=>{
        //console.log(d.Nombre)
        //options.push(d.Codigo + ' - ' + d.Nombre)
        options.push({Nombre: d.Nombre, Codigo: d.Codigo})
      })
      return options; 
    }
    let listaNombresCursos = createList();
    */
    return(
        <div className = "panel-cursos-seleccionados col-12 col-sm-7 col-md-6">
           <div  className = "d-flex align-content-between flex-wrap justify-content-center"> 
            <div>
                { 
                    props.cursosSeleccionados.map((curso,index)=>{
                        return(
                            
                          <div key = {curso.Nombre + index} className = "selected-curso-task"/* + cursoColor.getClassColor(index)}*/>
                              <div className = "codigo">
                                {curso.Codigo}
                              </div>
                              <div>
                                    {curso.Nombre}
                              </div>
                              <i
                                onClick={(e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    props.triggerDelete(curso.Nombre,index);
                                 }}>
                              </i>
                          </div>
                        )
                    })
                }

            </div>
            
            
            
              
                <a type="button" href = "#info" onClick = {props.handleGenerar}>GENERAR</a>
              
            
              </div>
        </div>
    )
}
const Generador = (props) => {
    
    
        return(
            <div className = "row justify-content-between">                 
                <ControlPanel 
                	listaSelect = {props.listaSelect} 
                	handleInput = {props.handleInput}
                	cursosSeleccionados = {props.cursosSeleccionados}
                    handleGenerar = {props.handleGenerar}
                 />
 			           
                <SelectionPanel
                  cursosSeleccionados = {props.cursosSeleccionados}
                  handleGenerar = {props.handleGenerar}
                  triggerDelete = {props.triggerDelete}
                />  
            </div>  
          	  
          
        )
    
}
export default Generador;