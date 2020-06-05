import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react';
import OptionPanel from './components/OptionPanel/OptionPanel'
import PanelCursos from './components/CursosPanel/PanelCursos'
import SelectionPanel from './components/SelectionPanel/SelectionPanel'
import DatabaseDriver from './components/functions/DatabaseDriver'
import Horario from './components/Horario/Horario';

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
    selectRef = React.createRef();
    cursosSelectedRef = React.createRef();
    panelOpc = React.createRef();
    
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
        console.log(this.state)
    } 

    handleAgregar = ()=>{
        const cursoSelected = this.selectRef.current.options[this.selectRef.current.selectedIndex]
        if(typeof(cursoSelected) != 'undefined'){
            let nameCurso = cursoSelected.value;
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

    handleQuitar = ()=>{

        const cursoSelected = this.cursosSelectedRef.current.options[this.cursosSelectedRef.current.selectedIndex]
        if(typeof(cursoSelected) != 'undefined'){

            this.setState(prevState=>{
                const filtered = prevState.selectedCursos.filter(i=>i != cursoSelected.value);
                return{
                    names : prevState.names,
                    selectedCursos : filtered,
                    arrayOpc : prevState.arrayOpc,
                    rendeHorario : prevState.rendeHorario,
                    opcSelect : prevState.opcSelect,
                    focusAble : false
                }
            })
        }
    }
    handleGenerar = ()=>{
        console.log(this.state.selectedCursos)
        console.log(this.DatabaseDriver.generar(this.state.selectedCursos))
        let newOpc = this.DatabaseDriver.generar(this.state.selectedCursos)
        this.setState(prevState=>({
            names : prevState.names,
            selectedCursos : prevState.selectedCursos,
            arrayOpc : newOpc,
            rendeHorario : false,
            opcSelect : 0,
            focusAble : prevState.focusAble
        }))
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
    
    render(){
        return(<>
            <div id = "grid"> 
                <SelectionPanel
                    ref = {this.cursosSelectedRef} 
                    list = {this.state.selectedCursos} 
                    handleGenerar = {this.handleGenerar} 
                    handleQuitar = {this.handleQuitar} 
                /> 
                <div id = "logo"></div>

                <PanelCursos
                    handleChangeFaculty = {this.handleChangeFaculty}
                    names = {this.state.names}
                    handleAgregar = {this.handleAgregar}
                    selectRef = {this.selectRef}
                />

                <OptionPanel 
                    listOpc = {this.state.arrayOpc} 
                    handleSelectOpcion = {this.handleSelectOpcion} 
                    handleVerHorario = {this.handleVerHorario}
                    ref = {this.panelOpc}
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