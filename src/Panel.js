import React from 'react'

const Panel = React.forwardRef((props,ref)=>{
    return(
        <>
        <div></div>
        <div id = "grid-cont-panel">
              <div id="cont-cont-panel-opc">
                  <div id = "cont-panel-opc">
                      <div id = "panel-opc">
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
});

export default Panel;