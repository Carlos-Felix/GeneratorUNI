import React, { Component } from 'react';
import Header from './HeaderComponent';
import Generador from './GeneradorComponent';
import OptionPanel from './OptionPanel';

import {addCurso,addOpcionesHorario,resetOpcionesHorario,deleteCurso} from '../redux/ActionCreators'

import { connect } from 'react-redux';

import DatabaseDriver from '../resources/DatabaseDriver'

import GeneradorHorarios from '../resources/generador';

import Horario from './HorarioComponent'

const mapDispatchToProps = dispatch => ({
  
  agregarCurso: (curso) => dispatch(addCurso(curso)),
  agregarOpciones: (opciones) => dispatch(addOpcionesHorario(opciones)),
  resetOpciones: () => dispatch(resetOpcionesHorario()),
  deleteCurso: (index) => dispatch(deleteCurso(index))
});

const mapStateToProps = state => {
  return {
    cursos: state.cursos.cursos,
    cursosSeleccionados: state.cursos.cursosSeleccionados,
    opcionesHorarios: state.cursos.opcionesHorarios
  }
}

class Main extends Component{

	constructor(props){
        super(props);
     
        this.state = {
            faculty: "ciencias",
            opcionSeleccionada: 0,
            showHorario: false
        }
        this.DatabaseDriver = new DatabaseDriver();
        this.listaSelect = this.createList()
    }

    createList = ()=>{
      let options = [];
      
      
      this.props.cursos.map((curso,index)=>{
        //console.log(d.Nombre)
        
        options.push({value :curso.Codigo, label : curso.Codigo + ' - ' + curso.Nombre})
      })
      return options;
    }
    

    handleInput = (e)=>{

        this.props.agregarCurso(this.DatabaseDriver.findbyNombreInDatabase({Codigo: e.value}))

        //const a = GeneradorHorarios(this.props.cursosSeleccionados)
        //this.props.agregarOpciones(a)
        if(this.state.showHorario == true){
            this.setState({showHorario:false})
        }
    }

    handleGenerar = (e)=>{
        
        const a = GeneradorHorarios(this.props.cursosSeleccionados);
        this.props.agregarOpciones(a);
        this.setState({opcionSeleccionada: 0,showHorario:true});

    }

    handleSelectOpcion = (e)=>{
        this.setState({opcionSeleccionada: e.target.value,showHorario:true})
    }

    handleVerHorario = ()=>{
        console.log('Generar')
        //this.setState({opcionSeleccionada: e.target.value})
    }

    triggerDelete = (nombre,index)=>{
        

        //let selectedCursos = [...this.state.selectedCursos]
        
        //selectedCursos.splice(index, 1);
        //localStorage.setItem("selectedCursos", JSON.stringify(selectedCursos));
        //console.log(selectedCursos)
        //this.setState({selectedCursos: selectedCursos,focusAble: false})
        this.props.deleteCurso(index);
        if(this.state.showHorario == true){
            this.setState({showHorario:false})
        }
        
    }

	render(){
		return(
            <div>
            <Header/>
		  <div className = "container">
		    <Generador 
		    	listaSelect = {this.listaSelect}
		    	handleInput = {this.handleInput}
		    	cursosSeleccionados = {this.props.cursosSeleccionados}
                handleGenerar = {this.handleGenerar}
                triggerDelete = {this.triggerDelete}
		    	/>
            <OptionPanel 
                listOpc = {this.props.opcionesHorarios}
                handleSelectOpcion = {this.handleSelectOpcion}
                handleVerHorario = {this.handleVerHorario}
                />
            <Horario
                //render = {this.state.rendeHorario} 
                //focusAble = {this.state.focusAble} 
                opcionSelect = {this.props.opcionesHorarios[this.state.opcionSeleccionada]} 
                
                cursosSeleccionados = {this.props.cursosSeleccionados}
                array = {this.props.opcionesHorarios}
                showHorario = {this.state.showHorario}
            />
		  </div>
          </div>
	)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

