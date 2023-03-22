import React from 'react';

const Knob = (props) => {
   return (
      <div style={{border: '1px solid salmon', margin: '20px', padding: '20px'}}>
         <h5> This is a Knob component </h5>
         <p> Steps here: {props.steps} </p>
      </div>
   );
};

export default Knob;