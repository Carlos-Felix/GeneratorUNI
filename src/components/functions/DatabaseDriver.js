import GeneradorHorarios from './generador'
import dataFC from '../../data/database.json';
import dataFIM from '../../data/dbFIM.json'

class DatabaseDriver{
    constructor(){
        this.tempDatabase = []
        this.database = dataFC
    }

    getAllFacultyNames = (faculty)=>{
        
        if(faculty == 'FC'){
            this.changeDatabase(dataFC);
            return this.getAllNamesFromDatabase();
        }
        if(faculty == 'FIQT'){
            
            return []
        }
        if(faculty == 'FIA'){
            
            return []
        }
        if(faculty == 'FIM'){
            this.changeDatabase(dataFIM);
            return this.getAllNamesFromDatabase();
        }
        return []
            
        
    }

    getAllNamesFromDatabase =()=>{
        let res = [];
        for(let d in this.database){
            res.push(this.database[d].Nombre)
        }   
        res.sort();
        return res;
    }

    changeDatabase = (NewDatabase)=>{
        this.tempDatabase = []
        this.database = NewDatabase;
    }

    addToTempDatabase = (nameCurso)=>{
        this.tempDatabase.push(this.findbyNombreInDatabase({"Nombre" : nameCurso}))
    }

    findbyNombreInDatabase = (objJson)=>{
        for(let i in this.database){
            if(this.database[i].Nombre == objJson.Nombre){
                return this.database[i];
            }
        }
        return null;
    }

    findbyNombreInTempDatabase = (objJson)=>{
        for(let i in this.tempDatabase){
            if(this.tempDatabase[i].Nombre == objJson.Nombre){
                return this.tempDatabase[i];
            }
        }
        return null;
    }

    getCursos = (arrayNames)=>{
        let arrayCursos = [];
        for(let n in arrayNames){
            arrayCursos.push(this.findbyNombreInTempDatabase({"Nombre" : arrayNames[n]}));
        }
        return arrayCursos;
    }

    generar = (arrayNames)=>{
        let arrayOpciones = GeneradorHorarios(this.getCursos(arrayNames));
        arrayOpciones.sort(function(a,b){
            if(a[1][1] > b[1][1]){
                return 1;
            }else if(a[1][1] < b[1][1]){
                return -1;
            }else{
                if(a[1][0] > b[1][0]){
                    return 1
                }else if(a[1][0] < b[1][0]) {
                    return -1;
                }   
            }
            
        })
        return arrayOpciones;
    }
}

export default DatabaseDriver;