const socket = io();
var Cur_Select = [];
var InfOp = [];



Obtener = ()=>{
    $.ajax({
        url:'/nombres',
        success: (nombres)=>{
            var first = true;
            nombres.forEach((i)=>{
                var str;
                if(first){
                    str = '<option selected = "selected">' + i + '</option>';
                    first = false;
                }else{
                    str = '<option>' + i + '</option>'
                }
                
                $('#lista-cursos').append(str); 
            }
                
            )
        }
    })
}

Obtener();

agregar = ()=>{
    i = $("#lista-cursos :selected").text();
    var str = '<option>' + i + '</option>'
    $('#cursos-seleccionados').append(str);
};

$("#btn-Agregar").click(()=>{
    agregar();
});

requestCursos = (Cur_Select)=>{
    $.ajax({
        url: '/cursos',
        method: 'POST',
        data: {
            cursos : JSON.stringify(Cur_Select)
        }//
    })
}

$("#btn-Generar").click(()=>{
    Cur_Select = [];
    $("#cursos-seleccionados option").each((i,o)=>{
        //if(i == 0) 
        Cur_Select.push(o.text);
    });
    requestCursos(Cur_Select);
});

$("#btn-Quitar").click(()=>{
    $("#cursos-seleccionados option:selected").remove();
});

$("#btn-crear-horario").click(()=>{
    
   var opc = document.getElementsByName('opciones');
   var length = opc.length;
   var selected = 0;
   for(var i = 0;i < length; i++){
        if (opc[i].checked) {
            selected = opc[i].value
   }}

   localStorage.setItem("info",JSON.stringify(InfOp[selected][2]));
   window.open('/horario');
});

socket.on('inf',(data)=>{
    InfOp = data;
    $('#cont-panel-opc').empty();
    var first = true;
    for(var op in data){
        if(first){
            temp = '<div class = "option"><input type="radio" checked = "checked" name="opciones" value= "' + op + '">' + data[op][0] + '</div>';
            first = false;
        }else{
            temp = '<div class = "option"><input type="radio" name="opciones" value= "' + op + '">' + data[op][0] + '</div>';
        }
        
        $('#cont-panel-opc').append(temp);
    }
   
});

