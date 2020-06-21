import Horario from './horario'

let h = new Horario();

function fenic(arr,n,nombres) {
    let res = []
    arr.reduce((a,b)=>{
        return a.map((x)=>{
            return b.map((y)=>{
                if( x.concat([y]).length == n) res.push(h.detect(x.concat([y]),nombres))
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
    let ArrayC = []
    let nOPC = 1
    
    Cursos.map((c)=>{
        nOPC = nOPC*c.Secciones.length
        ArrayC.push(c.Secciones)
        nombres.push(c.Nombre)
    })

    if(nOPC <= 4100){
        return fenic(ArrayC,Cursos.length,nombres)
    }
    alert("¡Hay muchas posibilidades!")
    return []
}

export default GeneradorHorarios;