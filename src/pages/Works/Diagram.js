import CanvasDraw from "react-canvas-draw";
import './Diagram.css';
import React, { createRef, useState } from "react";


function Diagram(props) {
  const { selectLan } = props;
  const canvasRef = createRef(null);
  const [color, setColor] = useState('#000000');
  const [radius, setRadius] = useState(5);
  const [canvas, setCanvas] = useState([500, 800]);

  const style = {
    width: radius + 'px',
    background: color,
  };

  setTimeout(() => {
    if (window.screen.width < 970 ){
      setCanvas([window.screen.height/2 , window.screen.width - 50])
    }
  }, 0);

  return (
  <div className='Diagram'>
    <main>
      <CanvasDraw ref={canvasRef} style={{borderRadius: '5px'}} brushColor={color} brushRadius={radius} canvasHeight={canvas[0]} canvasWidth={canvas[1]} hideGrid={false}/>
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
