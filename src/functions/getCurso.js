function findbyNombreInTempDatabase(objJson){
    let res
    for(let i in tempDatabase){
        if(tempDatabase[i].Nombre == objJson.Nombre){
            return tempDatabase[i];
        }
    }
    return null;
}

getCursos = (Cur_Select)=>{
    let arrayCursos = [];
    for(let c in Cur_Select){

        arrayCursos.push(findbyNombreInTempDatabase({"Nombre" : Cur_Select[c]}));
    }
    return arrayCursos;
}