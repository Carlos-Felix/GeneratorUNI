import React from 'react';
import Panel from './Panel'
import GeneradorHorarios from './functions/generador'
import dataFC from './data/database.json';
import dataFIM from './data/dbFIM.json'

let tempDatabase = []

class List extends React.Component{
    constructor(props){
        super(props);
        this.data = this.getNames(dataFC);
        
        this.state = {
            facultad :'FC'
        }
        this.changeFaculty = this.changeFaculty.bind(this);
        this.addCurso = this.addCurso.bind(this);
        this.generar = this.generar.bind(this);
    }
    //REFERENCIAS
    selectRef = React.createRef();
    cursosSeleccRef = React.createRef();

    getData(e){
        switch(e){
            case 'FC':
                this.data = this.getNames(dataFC);
                break;
            case 'FIIS':
                this.data = []
                break;
            case 'FIA':
                this.data = []
                break;
            case 'FIM':
                this.data = this.getNames(dataFIM);
                break;
            default: this.data = []
        }
        
    }

    getCursos = (Cur_Select)=>{
        let arrayCursos = [];
        for(let c in Cur_Select){
    
            arrayCursos.push(findbyNombreInTempDatabase({"Nombre" : Cur_Select[c]}));
        }
        return arrayCursos;
    }

    changeFaculty(event){
        this.getData(event.target.value)
        
        this.setState({
            facultad : event.target.value   
        })
    }   
    getNames(database){
        let res = [];
        for(let d in database){
            res.push(database[d].Nombre)
        }   
        res.sort();
        return res;
    }

    addCurso(){
        let nameCurso = this.selectRef.current.options[this.selectRef.current.selectedIndex].value;
        var option = document.createElement("option");
        option.appendChild( document.createTextNode(nameCurso));
        this.cursosSeleccRef.current.appendChild(option)
    }

    generar(){
        let curSelec = [];
        let x = this.cursosSeleccRef.current.length;
        //var x = document.getElementById("mySelect");
        for (let i = 0; i < x; i++) {
            curSelec.push(this.cursosSeleccRef.current.options[i].text);
        }
        console.log(curSelec);
        console.log(GeneradorHorarios(this.getCursos(curSelec)));
    }

    render(){
        return(<>
            <div id = "panel-cursos-seleccionados">
              <select id = "cursos-seleccionados" size="20" ref = {this.cursosSeleccRef}></select>
              <div id = "cont-btn-Generar-Quitar">
                  <button type="button" id = "btn-Generar" onClick = {this.generar}>Generar</button>
                  <button type="button" id = "btn-Quitar">Quitar Curso</button>
              </div>
              
          </div>
          <div id = "logo">
          </div>
            <div id = "panel-lista-curso">
                <div></div>
                <div><select id = "fac" size="1" onChange = {this.changeFaculty} value={this.state.value}>
                    <option value = 'FC'>Ciencias</option>
                    <option value = 'FIIS'>FIIS</option>
                    <option value = 'FIM'>FIM</option>
                    <option value = 'FIEE'>FIEE</option>
                    <option value = 'FIQT'>FIQT</option>
              </select></div>
              <div id = "cont-btn-Agregar">
                  <button type="button" id = "btn-Agregar" onClick = {this.addCurso}>Agregar</button>
              </div>
              <select id = "lista-cursos" size="10" ref = {this.selectRef}>
                  {
                      this.data.map((d)=>{
                          return(
                            <option>{d}</option>
                          )
                      })
                  }
              </select>
          </div>
          <Panel />
          </>
        )
    }
}
export default List;