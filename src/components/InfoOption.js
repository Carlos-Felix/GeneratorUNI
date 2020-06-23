import React from 'react'
import '../css/InfoOption.css'
//<div className = "info-option"><div>{ona(props.listOpc)}</div> <div id = "link-f"><a href = "https://fourleaves.org.pe/">visítanos</a></div></div>
const InfoOption =  (props)=>{
    //console.log(props.o)
    if(props.o[0] === 0){
        return(
                <div className = "info-option">
                    <div>:3</div><div id = "link-f"><a href = "https://fourleaves.org.pe/">visítanos</a></div>
                </div>
        )
    }else{
        return(
            <div className = "info-option">
                <div>{props.o[0]} Opciones, {props.o[1]} sin cruces</div><div></div>
            </div>
        )
    }
}

export default InfoOption;