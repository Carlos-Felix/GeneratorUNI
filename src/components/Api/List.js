import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import React from 'react';
import OptionPanel from '../OptionPanel/OptionPanel'
import PanelCursos from '../CursosPanel/PanelCursos'
import SelectionPanel from '../SelectionPanel/SelectionPanel'
import DatabaseDriver from '../functions/DatabaseDriver'
import Horario from '../Horario/Horario'
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
        //console.log(this.state)
    } 

    handleAgregar = ()=>{
        console.log(this.selectRef.current.state.value.label)
        
        const cursoSelected = this.selectRef.current.state.value.label//this.selectRef.current.options[this.selectRef.current.selectedIndex]
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

    handleQuitar = (e)=>{
        e.stopPropagation()
        
        let sCursoIndex = this.cursosSelectedRef.current.selectedIndex
        //console.log(sCursoIndex)
        let selectedCursos = this.state.selectedCursos
        if( sCursoIndex !== -1){
            selectedCursos.splice(sCursoIndex,1)
        }

        this.setState((prevState)=>{
            return{
                names : prevState.names,
                selectedCursos : selectedCursos,
                arrayOpc : prevState.arrayOpc,
                rendeHorario : prevState.rendeHorario,
                opcSelect : prevState.opcSelect,
                focusAble : false
            }
        })
    }
    
    handleGenerar = ()=>{
        
        let newOpc = this.DatabaseDriver.generar(this.state.selectedCursos)
        //console.log(newOpc)
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

    handleInput = (e)=>{
        //console.log(e)
        const cursoSelected = e.label//this.selectRef.current.options[this.selectRef.current.selectedIndex]
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
        this.setState({selectedCursos: selectedCursos})
    }
    
    render(){
        return(<>
            <div id = "grid"> 
                
                
                <PanelCursos
                    handleChangeFaculty = {this.handleChangeFaculty}
                    names = {this.state.names}
                    handleAgregar = {this.handleAgregar}
                    handleInput = {this.handleInput}
                    selectRef = {this.selectRef}
                />
                <SelectionPanel
                    ref = {this.cursosSelectedRef} 
                    selectedCursos = {this.state.selectedCursos} 
                    handleGenerar = {this.handleGenerar} 
                    handleQuitar = {this.handleQuitar} 
                    triggerDelete = {this.triggerDelete}
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