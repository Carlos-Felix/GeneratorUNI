import React from 'react'
import '../css/OptionPanel.css'
import InfoOption from '../components/InfoOption'

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
const OptionPanel = React.forwardRef((props,ref)=>{
    //const inputEl = useRef(null);

    return(
        <>
            <InfoOption
                o = {ona2(props.listOpc)}
            ></InfoOption>
            <div id = "grid-cont-panel">
                <div id="cont-cont-panel-opc">
                    <div id = "cont-panel-opc">
                        <div id = "panel-opc" onChange = {props.handleSelectOpcion} ref = {ref.panelOpc}>
                            { 
                                
                                props.listOpc.map((d,index)=>{
                                    
                                    if(index === 0){
                                        return(
                                            <div key = {d[0]} className = "option">
                                                <input type="radio" defaultChecked name="opciones" value= {index}></input> {d[0]} </div>
                                        )
                                    }
                                    return(
                                        <div key = {d[0]} className = "option">
                                            <input type="radio" name="opciones" value= {index}></input> {d[0]} </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div id = "cont-btn-crear-horario">
                    <button id = "btn-crear-horario" onClick = {props.handleVerHorario} ref = {ref.verHorarioButton} >VER HORARIO</button>
            </div>
        </>
    )
});

export default OptionPanel;