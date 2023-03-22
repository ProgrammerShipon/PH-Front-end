import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name='Pabna' special='Mantal Hospital' ></District>
      <District name='Rajbari' special='Misti' ></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '10px',
  padding: '20px',
}

function District ( props ) {
  const [power, setPower] = useState(1);

  const boostPower = () => {
    setPower(power * 2)
  }

  return (
    <div style={districtStyle}>
      <h2>Name: {props.name} </h2>
      <p>Specialty: {props.special} </p>
      <h4> Power: {power} </h4>
      <button onClick={boostPower}> Boost The Power </button>
    </div>
  )
}

export default App;
