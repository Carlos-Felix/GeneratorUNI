function create2DArray() {
    array = [[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ,[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
            ]
	return array; 
};

class Horario{
    constructor(){
        this.matrizHorario = create2DArray();
        this.crucesTeoria = 0;
        this.crucesPractica = 0;
    }
    insertarCasillaHora(nombre_curso,seccion,hora){
        
        if(this.matrizHorario[hora.Dia][hora.Hora].length == 0){
            this.matrizHorario[hora.Dia][hora.Hora].push([nombre_curso,seccion,hora.Prioridad]);
        }else{
            if(hora.Prioridad == 1){
                this.crucesTeoria  = this.crucesTeoria +1;
            }
            if(hora.Prioridad == 2){
                let band = 0;
                for(let c in this.matrizHorario[hora.Dia][hora.Hora]){
                    if(this.matrizHorario[hora.Dia][hora.Hora][c][2] == 2){
                        this.crucesPractica = this.crucesPractica +1;
                        band = 1;
                        break;
                    }
                }
                if(band == 0){
                    this.crucesTeoria = this.crucesTeoria +1;
                }
            }
            this.matrizHorario[hora.Dia][hora.Hora].push([nombre_curso,seccion,hora.Prioridad]);
        }
    };
    imprimir(){
        for(let j in this.matrizHorario){
            for(let i in this.matrizHorario[j]){
                console.log(this.matrizHorario[j][i]);
            }
        }
    }

    detect(Secciones,nombres){
        this.matrizHorario = create2DArray();
        this.crucesTeoria = 0;
        this.crucesPractica = 0;
        let nomSecc = "";
        let i = 0;
        for(let seccion in Secciones){
            nomSecc = nomSecc + nombres[i].substring(0,31) + " (" + Secciones[seccion].Seccion + ") | ";
            for(let hora in Secciones[seccion].Horas){
                this.insertarCasillaHora(nombres[i],Secciones[seccion].Seccion,Secciones[seccion].Horas[hora])
            }
            i = i+1;
        }
        nomSecc = nomSecc + "Cruce Teoría: " + this.crucesTeoria+" " + "Cruce Practica: " + this.crucesPractica;
        return [nomSecc,[this.crucesTeoria,this.crucesPractica],this.matrizHorario];
    }
}