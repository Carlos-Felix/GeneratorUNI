import GeneradorHorarios from './generador'

class driverGH{
    constructor(databaseFaculty){
        this.tempDatabase = []
        this.database = databaseFaculty;
    }

    addToTempDatabase = (nameCurso)=>{
        this.tempDatabase.push(this.findbyNombreInDatabase({"Nombre" : nameCurso}))
    }

    findbyNombreInDatabase = (objJson)=>{
        let res;
        for(let i in this.database){
            if(this.database[i].Nombre == objJson.Nombre){
                return this.database[i];
            }
        }
        return null;
    }

    findbyNombreInTempDatabase = (objJson)=>{
        //let res
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

export default driverGH;