import React from 'react';

const ona2 = (aa)=>{
    let l = aa.length
    let c = 0
    if(l === 0) return [0,0]
    for(let i = 0; i < l;i++){
        if(aa[i][1][0] > 0 || aa[i][1][1] > 0) break
        else c = c+1
    }

    return [l,c]
}
//<div className = "info-option"><div>{ona(props.listOpc)}</div> <div id = "link-f"><a href = "https://fourleaves.org.pe/">visítanos</a></div></div>
const OptionPanel = (props)=>{
    //const inputEl = useRef(null);
    const InfoOption =  (props)=>{
    //console.log(props.o)
        if(props.o[0] === 0){
            return(
                
                    <div id = "info" className = "d-flex justify-content-between info-option">
                        <div></div><a href = "https://fourleaves.org.pe/" target="_blank">visítanos</a>
                    </div>
                
            )
        }else{
            return(
                
                    <div id = "info" className = "info-option">
                        <div>{props.o[0]} Opciones, {props.o[1]} sin cruces</div><div></div>
                    </div>
                
            )
        }
    }

    return(
        <div className = "row">
            <InfoOption
                o = {ona2(props.listOpc)}
            ></InfoOption>
            <div className = "panel-opciones">
                
                <div onChange = {props.handleSelectOpcion} >
                    { 
                        
                        props.listOpc.map((d,index)=>{
                            
                            if(index === 0){
                                return(
                                    <div key = {d[0]}>
                                        <input type="radio" defaultChecked name="opciones" value= {index}></input> {d[0]} </div>
                                )
                            }
                            return(
                                <div key = {d[0]}>
                                    <input type="radio"  name="opciones" value= {index}></input> {d[0]} </div>
                            )
                        })
                    }
                </div>
                    
                 
                 
                <a id = "btn-crear-horario" href = "#grid-horario" onClick = {props.handleVerHorario}>VER HORARIO</a>
                
            
            </div>
            
           
        </div>
    )
}

export default OptionPanel;
