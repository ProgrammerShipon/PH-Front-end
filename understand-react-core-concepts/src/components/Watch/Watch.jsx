import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {

   const [ steps , setSteps ] = useState(0);

   const increase = () => {
      setSteps(steps + 1)
   }

   useEffect(() => {
      console.log(steps)
   }, [steps])

   return (
      <div style={{border: '1px solid green', margin: '20px', padding: '20px'}}>  
         <h2> This is my smart Watch! </h2>
         <p> Stetps: { steps } </p>
         <button onClick={increase}> De Dour </button>
         <Dial steps={steps}></Dial>
      </div>
   );
};

export default Watch;

