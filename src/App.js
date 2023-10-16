import './App.css';
import { useState } from 'react'

function App() {
  const [temp, updateTemp] = useState({ far: 0, cel: 0 });
  //Attempted to create saved temperatures 
  //const [savedTemps, updateSavedTemps] = useState([{}])

  const updateCel = e => updateTemp({
    far: (e.target.value * 9 / 5) + 32,
    cel: e.target.value,
  })

  const updateFar = e => updateTemp({
    far: e.target.value,
    cel: (e.target.value - 32) * 5 / 9
  })

  return (
    <header className="App-header">
      <div className="App">
        <h1>Jake Bertish - Calculator</h1>
        <h2>Celsius</h2>
        <input
          class="input-box"
          type="text"
          value={temp.cel}
          onChange={updateCel}
        ></input>
        <h2>Farenheit</h2>
        <input
          class="input-box"
          type="text"
          value={temp.far}
          onChange={updateFar}
        ></input>
      </div>
    </header>
  );
}

export default App;
