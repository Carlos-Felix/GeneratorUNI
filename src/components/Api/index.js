import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react';
import OptionPanel from '../OptionPanel'
import PanelCursos from '../CursosPanel'
import SelectionPanel from '../SelectionPanel'
import DatabaseDriver from '../../functions/DatabaseDriver'
import Horario from '../Horario'
import './styles.css'

class List extends React.Component{
    constructor(props){
        super(props);
        this.DatabaseDriver = new DatabaseDriver();
        
        this.state = {
            names : this.DatabaseDriver.getAllFacultyNames('FC'),
            selectedCursos : [],
            arrayOpc : [],
            rendeHorario :false,
            opcSelect : 0,
            focusAble : false
        }
    }
    //REFERENCIAS
    panelOpc = React.createRef();
    verHorarioButton = React.createRef();
    
    //HANDLERS
    handleChangeFaculty = (event)=>{
        const faculty = event.target.value
        this.setState({
            names : this.DatabaseDriver.getAllFacultyNames(faculty),
            selectedCursos : [],
            arrayOpc : [],
            rendeHorario :false,
            opcSelect : 0,
            focusAble : false
        })
    } 
    
    handleGenerar = ()=>{
        
        let newOpc = this.DatabaseDriver.generar(this.state.selectedCursos)
        this.setState(prevState=>({
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : newOpc,
            rendeHorario : false,
            opcSelect : 0,
            focusAble : prevState.focusAble
        }))
        console.log(this.verHorarioButton)
        this.verHorarioButton.current.focus()

    }

    handleVerHorario = ()=>{
        this.setState(prevState=>({
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : prevState.arrayOpc,
            rendeHorario : true,
            opcSelect : prevState.opcSelect,
            focusAble: true
        }))
    }

    handleInput = (e)=>{
        const cursoSelected = e.label
        if(typeof(cursoSelected) != 'undefined'){
            let nameCurso = cursoSelected;
            this.DatabaseDriver.addToTempDatabase(nameCurso);
            this.setState(prevState=>({
                names : prevState.names,
                selectedCursos : prevState.selectedCursos.concat(nameCurso),
                arrayOpc : prevState.arrayOpc,
                rendeHorario : prevState.rendeHorario,
                opcSelect : prevState.opcSelect,
                focusAble : false

            }))
            
        }
    }

    handleSelectOpcion = (e)=>{
        const opcion = e.target.value
        this.setState(prevState=>({
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : prevState.arrayOpc,
            rendeHorario : false,
            opcSelect : opcion,
            focusAble: false
        }))
    }

    triggerDelete = (task, index)=>{
        console.log(index)
        let selectedCursos = [...this.state.selectedCursos]
        
        selectedCursos.splice(index, 1);
        console.log(selectedCursos)
        this.setState({selectedCursos: selectedCursos,focusAble: false})
    }
    
    render(){
        return(<>
            <div id = "grid">                 
                <PanelCursos
                    handleChangeFaculty = {this.handleChangeFaculty}
                    names = {this.state.names}
                    handleInput = {this.handleInput}
                />
                <SelectionPanel 
                    selectedCursos = {this.state.selectedCursos} 
                    handleGenerar = {this.handleGenerar} 
                    triggerDelete = {this.triggerDelete}
                /> 

                <OptionPanel 
                    listOpc = {this.state.arrayOpc} 
                    handleSelectOpcion = {this.handleSelectOpcion} 
                    handleVerHorario = {this.handleVerHorario}
                    ref = {{
                                verHorarioButton : this.verHorarioButton, 
                                panelOpc : this.panelOpc
                    }}
                />
            </div>
            <Horario 
                render = {this.state.rendeHorario} 
                focusAble = {this.state.focusAble} 
                opcionSelect = {this.state.opcSelect} 
                selectedC = {this.state.selectedCursos} 
                array = {this.state.arrayOpc}
            />
          </>
        )
    }
}
export default List;