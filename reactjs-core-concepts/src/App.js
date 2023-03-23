import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bappa Raj', 'Kuber', 'Jashim', 'Salman Shah']
  const singers = [
    {name: 'Dr. Mahfuz', job: 'Singer'},
    {name: 'Eva Rahman', job: 'Singer2'},
    {name: 'Agun', job: 'sopner'},
    {name: 'Shuvro', job: 'Pathor'}, 
  ]

  return (
    <div className="App">
      {
        nayoks.map(nayok => <li> { nayok } </li>)
      }
      {
        singers.map(singer => <Person name={singer.name} job={singer.job}></Person> )
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }

      <Person name="Shipon Hossen Raju" job="Web developer"> </Person>
      <Person name="Shila Islam" job="Prem lovely"> </Person>
      <Person name="Billal Hossen Raju" job="Student"> </Person>
      <h5> New Component . YAY </h5>
      <p> Rock Mama , React mama</p>
      <Friend name="Amin Hossen" job="Toto-Company" number="0173462353"></Friend>
      <Friend  name="Sumon Ali" job="Front-end Developer" number="0187563527"></Friend>
    </div>
  );
}

function Person (props) {
  console.log(props)
  return (
    <div className='person'> 
      <h1> {props.name} </h1> 
      <p> Profession: {props.job}  </p>
    </div>
  )
}

function Friend (props) {
  return (
    <div className='container'>
      <h3> Name: {props.name} </h3>
      <p> Job: {props.job} </p>
      <p> Number: {props.number} </p>
    </div>
  )
}

export default App;
