matriz = JSON.parse(localStorage.getItem("info"));

for(var dia in matriz){
    
    for(var hora in matriz[dia]){
        if(matriz[dia][hora].length > 0){
            for(var curso in matriz[dia][hora]){
                var temp = '#h'+ hora + '-' + dia;
                var clase;
                if(matriz[dia][hora][curso][2] == 1){
                    clase = 'teoria'
                }else if(matriz[dia][hora][curso][2] == 2){
                    clase = 'practica'
                }
                var temp2 = '<div class = ' + clase + '>' + matriz[dia][hora][curso][0] + '(' + matriz[dia][hora][curso][1]+')'+'</div>';
                $(temp).append(temp2);
            }
        }
    }
    
}
