import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}


// function Counter() {
//   const [count , setCount] = useState(45)

  
// const increaseCount = () => setCount(count + 1);
// const decreseCount = () => setCount(count - 1);

//   return (
//     <div>
//       <h3> Count : {count} </h3>
//       <button onClick={increaseCount} > Increase </button>
//       <button onClick={decreseCount} > Increase </button>
//     </div>
//   )
// }

function ExternalUsers () {
  const [users, setUsers] = useState([]);

  useEffect ( () => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then ( res => res.json())
    .then( data => setUsers(data))
  } , [])

  console.log(users)

  return (
    <div>
      <h2> External Users </h2>

      <hr />
      
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User (props) {
  return (
    <div className={{border: '2px solid red', margin: '20px'}}>
      <h3> Name: {props.name} </h3>
      <p> Email: {props.email} </p>
    </div>
  )
}

export default App;
