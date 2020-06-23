import React from 'react'
import '../css/InfoPanel.css'

const InfoPanel = (props,ref)=>{

    return(
        <>
            <div className = "info">
                <div className = "info-t">Teoría</div>
                <div className = "info-p">Práctica</div>
                <div className = "info-oc">Cruce</div>
            </div>
        </>
    )
}

export default InfoPanel;