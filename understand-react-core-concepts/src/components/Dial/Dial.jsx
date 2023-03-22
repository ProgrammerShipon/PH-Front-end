import React from 'react';
import Knob from '../Knob/Knob';

const Dial = ( props ) => {
   return (
      <div style={{border: '1px solid red', margin: '20px', padding: '20px'}}>
         <h3> This is Dial Component </h3>
         <p>Your Steps count: {props.steps} </p>
         <Knob steps={props.steps}></Knob>
      </div>
   );
};

export default Dial;