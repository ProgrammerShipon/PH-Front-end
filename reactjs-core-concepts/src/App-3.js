import './App.css';

function App() {
  return (
    <div className="App">
      <Person> </Person>
      <Person> </Person>
      <Person> </Person>
      <Person> </Person>
      <h5>New Component . YAY </h5>
      <p> Rock Mama , React mama</p>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person () {
  return (
    <div className='person'>
      <h1> Sakib AL Hasan</h1> 
      <p> Profession: Cricket  </p>
    </div>
  )
}

function Friend () {
  return (
    <div className='container'>
      <h3> Name: Ajay Devgun </h3>
      <p> Job: maramari </p>
    </div>
  )
}

export default App;
