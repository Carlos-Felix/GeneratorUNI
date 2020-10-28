import React from 'react'
import Select from 'react-select';
//import {CURSOS} from '../shared/cursos'

const cursosCreados = [
  {
    codigo: "3232",
    nombre: "este es su nombre"
  }
]

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




class ControlPanel extends React.Component{ 
    /*
      let date = new Date();
date.toISOString()
    
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
  constructor(props){
    super(props)
    this.state = {
      modal: "off"
    }
  } 
  handleModal = () => {
    if(this.state.modal == "off"){
      this.setState({modal: "on"})    
    }else{
      if(this.state.modal == "on"){
        this.setState({modal: "off"})
      }
    }
  }
  showModal = ()=>{
    if(this.state.modal == "on"){
      return(
        <div className = "modal-cursos">
          <textarea id="w3review" name="w3review" rows="4" cols="40">
            {JSON.stringify(cursosCreados,undefined,2)}
          </textarea>
        </div>
      )
    }
  }
  render(){
    return(
      
      <div className = "control-panel col-12 col-sm-5 col-md-5">
        <div class = "group">
            <input id = "este" type = "radio" name = "op" checked/>
          <label for = "este">Crear un curso</label>
            <input id = "otro" type = "radio" name = "op"/>
            <label for = "otro">esstte botonaso</label> 
        </div>
        <div className = "btn-agregar" onClick = {this.handleModal}>agregar</div>
        {
          this.showModal()
        }

        <Select
          options = {this.props.listaSelect}
          styles={customStyles} 
          onChange = {this.props.handleInput}
        >      
        </Select>
        
      </div>
    )
  }
}
export default ControlPanel;
