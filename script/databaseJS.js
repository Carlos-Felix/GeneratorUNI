async function lee_json() {
    let database;
    await $.getJSON("./script/database.json", function(datos) {
        database = datos;
    });
    return database;
}

function findbyNombreInDatabase(objJson){
    let res;
    for(let i in database){
        if(database[i].Nombre == objJson.Nombre){
            return database[i];
        }
    }
    return null;
}

function findbyNombreInTempDatabase(objJson){
    let res
    for(let i in tempDatabase){
        if(tempDatabase[i].Nombre == objJson.Nombre){
            return tempDatabase[i];
        }
    }
    return null;
}
function getNames(database){
    let res = [];
    for(let d in database){
        res.push(database[d].Nombre)
    }
    return res;
}

function cargarNombres(nombres){
    let first = true;
    let str;
    for(let n in nombres){
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
    let str = '<option>' + i + '</option>'
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
    let arrayCursos = [];
    for(let c in Cur_Select){

        arrayCursos.push(findbyNombreInTempDatabase({"Nombre" : Cur_Select[c]}));
    }
    return arrayCursos;
}

function sendOpc(){
    $('#cont-panel-opc').empty();
    let first = true;
    for(let op in Opciones){
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
        Cur_Select.push(o.text);
    });
    if(Cur_Select.length > 0){
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
    }
    
});

$("#btn-crear-horario").click(()=>{
    
    let opc = document.getElementsByName('opciones');
    if(opc.length > 0){
        let length = opc.length;
        let selected = 0;
        for(let i = 0;i < length; i++){
            if (opc[i].checked) {
                selected = opc[i].value
        }}
    
        localStorage.setItem("info",JSON.stringify(Opciones[selected][2]));
        window.open('./horario');
    }  
    
 });

let database;
let nombres;
let Opciones;
let tempDatabase = [];

lee_json().then((data)=>{
    database = data;
    nombres = getNames(database);
    nombres.sort();
    cargarNombres(nombres)

})


