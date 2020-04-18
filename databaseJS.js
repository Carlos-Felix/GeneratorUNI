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

function findbyNombreInDatabase(objJson){
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

function findbyNombreInTempDatabase(objJson){
    //console.log(objJson.Nombre);
    //console.log(database);
    var res
    for(var i in tempDatabase){
        if(tempDatabase[i].Nombre == objJson.Nombre){
            return tempDatabase[i];
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
    tempDatabase.push(findbyNombreInDatabase({"Nombre" : i}));
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

        arrayCursos.push(findbyNombreInTempDatabase({"Nombre" : Cur_Select[c]}));
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
    Opciones = GeneradorHorarios(getCursos(Cur_Select));
    Opciones.sort(function(a,b){
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
    sendOpc();
    console.log(tempDatabase);
});

$("#btn-crear-horario").click(()=>{
    
    var opc = document.getElementsByName('opciones');
    var length = opc.length;
    var selected = 0;
    for(var i = 0;i < length; i++){
         if (opc[i].checked) {
             selected = opc[i].value
    }}
 
    localStorage.setItem("info",JSON.stringify(Opciones[selected][2]));
    window.open('/GeneradorHTML/horario');
 });

var database;
var nombres;
var Opciones;
var tempDatabase = [];

lee_json().then((data)=>{
    database = data;
    //console.log("res:");
    //console.log(findbyNombre({"Nombre":"Hol"}));
    console.log("Aqui ans");
    nombres = getNames(database);
    nombres.sort();
    cargarNombres(nombres)

})







//console.log("ajaja");
//console.log(lee_json());

    


//console.log(database);


