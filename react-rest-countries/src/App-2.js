import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries () {
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  } , [])
  return (
    <div>
      <h1> Visiting Every country of the world!!! </h1>
      <p> Available Countries: {countries.length} </p>
      {
        countries.map(country => <Country name={country?.name?.common} population={country?.population}></Country>)
      }
    </div>
  )
}

function Country (props) {
  return (
    <div>
      <h3> {props.name} </h3>
      <p> {props.population } </p>
    </div>
  )
}

export default App;
