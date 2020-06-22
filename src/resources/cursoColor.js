class cursoColor{
    constructor(arrayNames){
        this.arrayCurso = arrayNames
    }
    classCurso(nameCurso){
        let color = this.match(nameCurso);
        switch(color){
            case 0:
                return "curso1";
            case 1:
                return "curso2";
            case 2:
                return "curso3";
            case 3:
                return "curso4";
            case 4:
                return "curso5";
            case 5:
                return "curso6";
            case 6:
                return "curso7";
            case 7:
                return "curso8";
            case 8:
                return "curso9";
            case 9:
                return "curso10";
        }
        

    }

    static getClassColor(index){
        switch(index){
            case 0:
                return "curso1";
            case 1:
                return "curso2";
            case 2:
                return "curso3";
            case 3:
                return "curso4";
            case 4:
                return "curso5";
            case 5:
                return "curso6";
            case 6:
                return "curso7";
            case 7:
                return "curso8";
            case 8:
                return "curso9";
            case 9:
                return "curso10";
        }
    }

    match(nameCurso){
        let n = this.arrayCurso.length;
        let i;
        for(i = 0; i < n;i++){
            if((nameCurso == this.arrayCurso[i])) break;
        }
        if(i == n){
            return -1;
        }
        return i;
    }
}

export default cursoColor;