import CanvasDraw from "react-canvas-draw";
import './Diagram.css';
import React, { createRef, useState } from "react";


function Diagram(props) {
  const { selectLan } = props;
  const canvasRef = createRef(null);
  const [color, setColor] = useState('#000000');
  const [radius, setRadius] = useState(5);

  const style = {
    width: radius + 'px',
    background: color,
  };

  return (
  <div className='Diagram'>
    <main>
      <CanvasDraw ref={canvasRef} style={{borderRadius: '5px'}} brushColor={color} brushRadius={radius} canvasHeight={500} canvasWidth={800} hideGrid={false}/>
    </main>
    <div>
      <button onClick={() => {setColor('#000000'); setRadius(5)}}>
        {selectLan ? 'RESET' : 'REINICIAR'}
      </button>
      <button onClick={() => canvasRef.current.undo()}>
        {selectLan ? 'UNDO' : 'DESHACER'}
      </button>
      <button onClick={() => canvasRef.current.clear()}>
        {selectLan ? 'CLEAR' : 'LIMPIAR'}
      </button>
      <button onClick={() => navigator.clipboard.writeText(canvasRef.current.getDataURL())}>
        {selectLan ? 'COPY' : 'COPIAR'}
      </button>
    </div>
    <div>
      <label>{selectLan ? 'Selector de color:' : 'Colour picker:'}</label>
      <input style={{ background: {color}}} type='color' value={color} onChange={e => setColor(e.target.value)}/>
      <br/>
      <label>{selectLan ? 'Grosor del pincel' : 'Brush thickness:'}</label>
      <input className="radius" min='1' max='100' type='range' value={radius} onChange={e => setRadius(e.target.value)}/>
      <br/>
      <div className='thickness' style={style}></div>
    </div>
  </div>
)}

export default Diagram;
