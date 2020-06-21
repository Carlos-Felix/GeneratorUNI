import GeneradorHorarios from './generador'
import dataFC from '../data/database.json';
import dataFIM from '../data/dbFIM.json'

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

    rebaseTempDatabase = ()=>{
        let storedSelectedCursos = JSON.parse(localStorage.getItem("selectedCursos"));
        let storedTempDatabase = JSON.parse(localStorage.getItem("tempDatabase"));
        
        let te= storedTempDatabase.filter((item)=> {
            for (let key in storedSelectedCursos) {
                console.log("init")
                console.log(item.Nombre)
                console.log(storedSelectedCursos[key])
              if (item.Nombre === undefined || item.Nombre == storedSelectedCursos[key]){
                console.log("pasa la prueba")
                   return true;
                }
            }
            console.log("nada")
            return false;
          });
          //localStorage.setItem("tempDatabase", JSON.stringify(storedTempDatabase));
          this.tempDatabase = te
    }

    addToTempDatabase = (nameCurso)=>{
        

        let found = false
        this.tempDatabase.map((elem)=>{
            if(elem.Nombre === nameCurso){
                found = true
            } 
        })
        if(!found) this.tempDatabase.push(this.findbyNombreInDatabase({"Nombre" : nameCurso}))
        if(this.tempDatabase.length >= 3 ) this.rebaseTempDatabase()
        
        localStorage.setItem("tempDatabase", JSON.stringify(this.tempDatabase));
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

    findByNombre = (objJson)=>{
        let res
        res = this.findbyNombreInTempDatabase(objJson)
        if(res == null){
            return this.findbyNombreInDatabase(objJson)
        } else return res
    }

    getCursos = (arrayNames)=>{
        let arrayCursos = [];
        for(let n in arrayNames){

            arrayCursos.push(this.findByNombre({"Nombre" : arrayNames[n]}));
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

    putNaLocalStorage = ()=>{
        return JSON.parse(localStorage.getItem("selectedCursos"));
    }
    getNamesInLocalStorage
}

export default DatabaseDriver;