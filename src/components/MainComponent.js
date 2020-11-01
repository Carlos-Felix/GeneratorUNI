import React, { Component } from 'react';
import Header from './HeaderComponent';
import Generador from './GeneradorComponent';
import OptionPanel from './OptionPanel';

import {addCurso,addOpcionesHorario,resetOpcionesHorario,deleteCurso, changeToPredef, chageToCreated, updateCreated} from '../redux/ActionCreators'

import { connect } from 'react-redux';

import DatabaseDriver from '../resources/DatabaseDriver'
import {CURSOS} from '../shared/repar'; 

import GeneradorHorarios from '../resources/generador';

import Horario from './HorarioComponent'

const mapDispatchToProps = dispatch => ({
  
  agregarCurso: (curso) => dispatch(addCurso(curso)),
  agregarOpciones: (opciones) => dispatch(addOpcionesHorario(opciones)),
  resetOpciones: () => dispatch(resetOpcionesHorario()),
  deleteCurso: (index) => dispatch(deleteCurso(index)),
  changeToPredef: () => dispatch(changeToPredef()),
  chageToCreated: () => dispatch(chageToCreated()),
  updateCreated: (updated) => dispatch(updateCreated(updated))
});

const mapStateToProps = state => {
  return {
    cursos: state.cursosCreados.cursos,
    cursosSeleccionados: state.cursosCreados.cursosSeleccionados,
    opcionesHorarios: state.cursosCreados.opcionesHorarios,
    cursosCreados: state.cursosCreados.cursosCreados
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
        console.log("Cursos")
       console.log(this.props.cursos)
    }


    handleInput = (e)=>{
        this.props.agregarCurso(this.props.cursos.get(e.value))
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

    updateCreated = (updated) => {
      console.log("Aqui updated")
      console.log(updated)
      this.props.updateCreated(updated)
    }

    chageToCreated = () => {
      this.props.chageToCreated()

    }

    changeToPredef = () => {
      this.props.changeToPredef()
    }

    triggerDelete = (nombre,index)=>{

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
		    	  cursos = {this.props.cursos.getSortValues()}
		    	  handleInput = {this.handleInput}
		    	  cursosSeleccionados = {this.props.cursosSeleccionados}
            handleGenerar = {this.handleGenerar}
            triggerDelete = {this.triggerDelete}
            changeToPredef = {this.changeToPredef}
            chageToCreated = {this.chageToCreated}
            handleSubmit = {this.updateCreated}
            cursosCreados = {this.props.cursosCreados}
		    	/>
         <OptionPanel 
            listOpc = {this.props.opcionesHorarios}
            handleSelectOpcion = {this.handleSelectOpcion}
            handleVerHorario = {this.handleVerHorario}
          />
         <Horario
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

