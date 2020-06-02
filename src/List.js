import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react';
import Panel from './Panel'
import ListCursos from './components/ListCursos'
import SelectedCursos from './components/SelectedCursos'
import driverGH from './functions/driverGH'
import dataFC from './data/database.json';
import dataFIM from './data/dbFIM.json'
import Horario from './components/Horario';

let tempDatabase = []

class List extends React.Component{
    constructor(props){
        super(props);
        this.driver = new driverGH(dataFC);
        this.state = {
            facultad :'FC',
            names : this.getNamesByFaculty('FC'),
            selectedCursos : [],
            arrayOpc : [],
            opcSelect : -1
        }
    }
    //REFERENCIAS
    selectRef = React.createRef();
    cursosSelectedRef = React.createRef();

    getNamesByFaculty(faculty){
        if(faculty == 'FC'){
            this.driver = new driverGH(dataFC);
            return this.getNamesByDatabase(dataFC);
        }
        if(faculty == 'FIQT'){
            
            return []
        }
        if(faculty == 'FIA'){
            
            return []
        }
        if(faculty == 'FIM'){
            this.driver = new driverGH(dataFIM);
            return this.getNamesByDatabase(dataFIM);
        }
        return []
        
    }
    
      
    getNamesByDatabase(database){
        let res = [];
        for(let d in database){
            res.push(database[d].Nombre)
        }   
        res.sort();
        return res;
    }
    
    //HANDLES

    handleChangeFaculty = (event)=>{
        
        this.setState({
            facultad : event.target.value,
            names : this.getNamesByFaculty(event.target.value),
            selectedCursos : [],
            arrayOpc : [],
            opcSelect : -1
        })
        console.log(this.state)
    } 

    handleAgregar = ()=>{
        let nameCurso = this.selectRef.current.options[this.selectRef.current.selectedIndex].value;
        this.driver.addToTempDatabase(nameCurso);
        this.setState(prevState=>({
            facultad : prevState.facultad,
            names : prevState.names,
            selectedCursos : prevState.selectedCursos.concat(nameCurso),
            arrayOpc : prevState.arrayOpc,
            opcSelect : prevState.opcSelect

        }))

    }

    handleQuitar = ()=>{
        let nameCurso = this.cursosSelectedRef.current.options[this.cursosSelectedRef.current.selectedIndex].value;

        this.setState(prevState=>{
            const filtered = prevState.selectedCursos.filter(i=>i != nameCurso);
            return{
                facultad : prevState.facultad,
                names : prevState.names,
                selectedCursos : filtered,
                arrayOpc : prevState.arrayOpc,
                opcSelect : prevState.opcSelect
            }
        })
    }
    handleGenerar = ()=>{
        console.log(this.state.selectedCursos)
        console.log(this.driver.generar(this.state.selectedCursos))
        let newOpc = this.driver.generar(this.state.selectedCursos)
        this.setState(prevState=>({
            facultad : prevState.facultad,
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : newOpc,
            opcSelect : -1
        }))
    }

    handleNewHorario = ()=>{
        alert("jsjs")
        this.setState(prevState=>({
            facultad : prevState.facultad,
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : prevState.arrayOpc,
            opcSelect : 0
        }))
    }
    
    render(){
        return(<>
            <div id = "grid">
          <div></div>  
            <div id = "panel-cursos-seleccionados">
                <SelectedCursos ref = {this.cursosSelectedRef} list = {this.state.selectedCursos}/>              
              <div id = "cont-btn-Generar-Quitar">
                  <button type="button" id = "btn-Generar" onClick = {this.handleGenerar}>Generar</button>
                  <button type="button" id = "btn-Quitar" onClick = {this.handleQuitar}>Quitar Curso</button>
              </div>
              
          </div>
          <div id = "logo">
          </div>
          
            <div id = "panel-lista-curso">
                <div></div>
                <div><select id = "faculty-list" size="1" onChange = {this.handleChangeFaculty} value={this.state.value}>
                    <option value = 'FC'>Ciencias</option>
                    <option value = 'FIIS'>FIIS</option>
                    <option value = 'FIM'>FIM</option>
                    <option value = 'FIEE'>FIEE</option>
                    <option value = 'FIQT'>FIQT</option>
              </select></div>
              
              <div id = "cont-btn-Agregar">
                  <button type="button" id = "btn-Agregar" onClick = {this.handleAgregar}>Agregar</button>
              </div>
              <ListCursos listOfNames = {this.state.names} ref = {this.selectRef}/>
          </div>
          <Panel listOpc = {this.state.arrayOpc}/>
          <div></div>
          <div></div>
          
          <div id = "cont-btn-crear-horario"><button id = "btn-crear-horario" onClick = {this.handleNewHorario}>Ver Horario</button></div>
          
          <div></div>
          <div></div>
          <div></div> 
      </div>
            <Horario opcionSelect = {this.state.opcSelect} array = {this.state.arrayOpc}/>
          </>
        )
    }
}
export default List;