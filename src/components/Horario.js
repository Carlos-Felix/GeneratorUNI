import React from 'react'
import './Horario.css'


const Horario = React.forwardRef((props,ref)=>{
    console.log(props.opcionSelect)
    //console.log(props.array[0][2])
    if(props.opcionSelect >= 0){
        console.log(props.array[0][2])
        return(
        <div className = "grid">
        <div>Horas</div>
        <div>Lunes</div>
        <div>Martes</div>
        <div>Miercoles</div>
        <div>Jueves</div>
        <div>Viernes</div>
        <div>Sabado</div>
        {
            
        }
        <div>7:00</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        <div>8:00</div>
        {
        props.array[props.opcionSelect][2].map((d,index)=>{
            if(index > 0 && index < 7){
                console.log(d[8])
                if(d[8].length == 0){
                    return(
                        <div> nada</div>
                    )
                }
                return (
                <div className = "oc">{
                        d[8].map((c,index)=>{
                            console.log("retortno")
                            if(c[2] == 1){
                                return (
                                    <div className = "teoria">{c[0]} ({c[1]})</div>
                                )
                            }
                            if(c[2] == 1){
                                return (
                                    <div className = "practica">{c[0]} ({c[1]})</div>
                                )
                            }
                        
                        })
                
                    
                    }</div>
                    )  
            }
            
        })}
        
        <div>9:00</div>
        <div id="h9-1"></div>
        <div id="h9-2"></div>
        <div id="h9-3"></div>
        <div id="h9-4"></div>
        <div id="h9-5"></div>
        <div id="h9-6"></div>
        <div>10:00</div>
        <div id="h10-1"></div>
        <div id="h10-2"></div>
        <div id="h10-3"></div>
        <div id="h10-4"></div>
        <div id="h10-5"></div>
        <div id="h10-6"></div>
        <div>11:00</div>
        <div id = "h11-1"></div>
        <div id = "h11-2"></div>
        <div id = "h11-3"></div>
        <div id = "h11-4"></div>
        <div id = "h11-5"></div>
        <div id = "h11-6"></div>
        <div>12:00</div>
        <div id = "h12-1"></div>
        <div id = "h12-2"></div>
        <div id = "h12-3"></div>
        <div id = "h12-4"></div>
        <div id = "h12-5"></div>
        <div id = "h12-6"></div>
        <div>13:00</div>
        <div id = "h13-1"></div>
        <div id = "h13-2"></div>
        <div id = "h13-3"></div>
        <div id = "h13-4"></div>
        <div id = "h13-5"></div>
        <div id = "h13-6"></div>
        <div>14:00</div>
        <div id = "h14-1"></div>
        <div id = "h14-2"></div>
        <div id = "h14-3"></div>
        <div id = "h14-4"></div>
        <div id = "h14-5"></div>
        <div id = "h14-6"></div>
        <div>15:00</div>
        <div id = "h15-1"></div>
        <div id = "h15-2"></div>
        <div id = "h15-3"></div>
        <div id = "h15-4"></div>
        <div id = "h15-5"></div>
        <div id = "h15-6"></div>
        <div>16:00</div>
        <div id = "h16-1"></div>
        <div id = "h16-2"></div>
        <div id = "h16-3"></div>
        <div id = "h16-4"></div>
        <div id = "h16-5"></div>
        <div id = "h16-6"></div>
        <div>17:00</div>
        <div id = "h17-1"></div>
        <div id = "h17-2"></div>
        <div id = "h17-3"></div>
        <div id = "h17-4"></div>
        <div id = "h17-5"></div>
        <div id = "h17-6"></div>
        <div>18:00</div>
        <div id = "h18-1"></div>
        <div id = "h18-2"></div>
        <div id = "h18-3"></div>
        <div id = "h18-4"></div>
        <div id = "h18-5"></div>
        <div id = "h18-6"></div>
        <div>19:00</div>
        <div id = "h19-1"></div>
        <div id = "h19-2"></div>
        <div id = "h19-3"></div>
        <div id = "h19-4"></div>
        <div id = "h19-5"></div>
        <div id = "h19-6"></div>
        <div>20:00</div>
        <div id = "h20-1"></div>
        <div id = "h20-2"></div>
        <div id = "h20-3"></div>
        <div id = "h20-4"></div>
        <div id = "h20-5"></div>
        <div id = "h20-6"></div>
        <div>21:00</div>
        <div id = "h21-1"></div>
        <div id = "h21-2"></div>
        <div id = "h21-3"></div>
        <div id = "h21-4"></div>
        <div id = "h21-5"></div>
        <div id = "h21-6"></div>
        <div>22:00</div>
        <div id = "h22-1"></div>
        <div id = "h22-2"></div>
        <div id = "h22-3"></div>
        <div id = "h22-4"></div>
        <div id = "h22-5"></div>
        <div id = "h22-6"></div>
        
    </div>
        )
    }
    
    
})
export default Horario;