async function lee_json() {
    var database;
    await $.getJSON("./database.json", function(datos) {
        //console.log(datos);
        //alert(datos);
        database = datos;
        //console.log("aqui");
        //console.log(database);
    });
    //console.log("debe");
    //console.log(database);
    return database;
}

function findbyNombre(objJson){
    //console.log(objJson.Nombre);
    //console.log(database);
    var res
    for(var i in database){
        if(database[i].Nombre == objJson.Nombre){
            return database[i];
        }
    }
    return null;
}
function getNames(database){
    var res = [];
    for(var d in database){
        res.push(database[d].Nombre)
    }
    return res;
}

function cargarNombres(nombres){
    var first = true;
    var str;
    for(var n in nombres){
        if(first){
        str = '<option selected = "selected">' + nombres[n] + '</option>';
        first = false;
        }else{
            str = '<option>' + nombres[n] + '</option>'
        }
        $('#lista-cursos').append(str);
    }
    
}

//Main
agregar = ()=>{
    i = $("#lista-cursos :selected").text();
    var str = '<option>' + i + '</option>'
    $('#cursos-seleccionados').append(str);
};



$("#btn-Agregar").click(()=>{
    agregar();
});

//event Quitar
$("#btn-Quitar").click(()=>{
    $("#cursos-seleccionados option:selected").remove();
});

getCursos = (Cur_Select)=>{
    var arrayCursos = [];
    for(var c in Cur_Select){

        arrayCursos.push(findbyNombre({"Nombre" : Cur_Select[c]}));
    }
    return arrayCursos;
}

function sendOpc(){
    $('#cont-panel-opc').empty();
    var first = true;
    for(var op in Opciones){
        if(first){
            temp = '<div class = "option"><input type="radio" checked = "checked" name="opciones" value= "' + op + '">' + Opciones[op][0] + '</div>';
            first = false;
        }else{
            temp = '<div class = "option"><input type="radio" name="opciones" value= "' + op + '">' + Opciones[op][0] + '</div>';
        }
        
        $('#cont-panel-opc').append(temp);
    }
}


$("#btn-Generar").click(()=>{
    Cur_Select = [];
    $("#cursos-seleccionados option").each((i,o)=>{
        //if(i == 0) 
        Cur_Select.push(o.text);
    });
    console.log("ontension de kursos");
    Opciones = GeneradorHorarios(getCursos(Cur_Select));
    sendOpc();
});

var database;
var nombres;
var Opciones;

lee_json().then((data)=>{
    database = data;
    //console.log("res:");
    //console.log(findbyNombre({"Nombre":"Hol"}));
    console.log("Aqui ans");
    nombres = getNames(database);
    cargarNombres(nombres)

})







//console.log("ajaja");
//console.log(lee_json());

    


//console.log(database);


