import Horario from './horario'

let h = new Horario();

function fenic(arr,n,nombres) {
    let res = []
    arr.reduce((a,b)=>{
        return a.map((x)=>{
            return b.map((y)=>{
                if( x.concat([y]).length === n) res.push(h.detect(x.concat([y]),nombres))
                return x.concat([y])
            })
        }).reduce((a,b)=>{
            return a.concat(b) },[])
        
    }
    , [[]])
    //console.log(res)
    return res
}


function GeneradorHorarios(Cursos){
    let nombres = [];
    let ArrayCursos = []
    let cantOpciones = 1
    
    Cursos.map((c)=>{
        cantOpciones = cantOpciones*c.Secciones.length
        ArrayCursos.push(c.Secciones)
        nombres.push(c.Nombre)
    })

    if(cantOpciones <= 4100){
        let res =  fenic(ArrayCursos,Cursos.length,nombres)
        
        res.sort(function(a,b){
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
        return res
    }


    alert("¡Hay muchas posibilidades!")
    return []
}

export default GeneradorHorarios;