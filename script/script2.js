matriz = JSON.parse(localStorage.getItem("info"));

for(let dia in matriz){
    
    for(let hora in matriz[dia]){
        if(matriz[dia][hora].length > 0){
            for(let curso in matriz[dia][hora]){
                let temp = '#h'+ hora + '-' + dia;
                let clase;
                if(matriz[dia][hora][curso][2] == 1){
                    clase = 'teoria'
                }else if(matriz[dia][hora][curso][2] == 2){
                    clase = 'practica'
                }
                let temp2 = '<div class = ' + clase + '>' + matriz[dia][hora][curso][0] + ' (' + matriz[dia][hora][curso][1]+')'+'</div>';
                $(temp).append(temp2);
            }
        }
    }
    
}
