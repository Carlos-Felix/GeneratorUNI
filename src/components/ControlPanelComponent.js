import React from 'react'
import Select from 'react-select';
//import {CURSOS} from '../shared/cursos'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid pink',
    color: state.isSelected ? 'red' : 'white',
    background: state.isFocused ? '#2f4f4f' : '#333',
    //background: '#333',
    padding: 20,
    //option--is-focused': isFocused,
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    //width: 200,
    ...provided,
    background: '#333',
    color: 'white'
  }),
  input: (provided) => ({
    // none of react-select's styles are passed to <Control />
    //width: 200,
    ...provided,
    //background: 'yellow',
    color: 'white'
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    //const transition = 'opacity 300ms';
    const color = 'white';
    //const background = 'yellow';
    //const background = 'yellow';

    return { ...provided, opacity,color};
  }
}





//import '../css/SelectionPanel.css'
//import cursoColor from '../resources/cursoColor'




const ControlPanel = (props)=>{
    console.log("AKAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    
      
    /*
    const createList = ()=>{
      let options = [];
      console.log("Ordenando la listaaaaaaaaaaaaa")
      
      props.cursos.map((curso,index)=>{
        //console.log(d.Nombre)
        console.log("esto=")
        options.push({value :curso.Nombre, label : curso.Codigo + ' - ' + curso.Nombre})
      })
      return options;
    }
    let opciones = createList()
    */
    return(
      
      <div className = "col-12 col-sm-5 col-md-5">
        <Select
          options = {props.listaSelect}
          styles={customStyles} 
          onChange = {props.handleInput}
        >      
        </Select>
        
        
      </div>
    )
}
export default ControlPanel;