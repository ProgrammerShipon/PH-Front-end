import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
   const {name, price, id} = props.cosmetic
   
   const addToCart = () => {
      addToDb(id)
   }
   
   return (
      <div style={{border: '1px solid green', padding: '15px', margin: '15px'}}>
         <p><small>it has id : {id}</small></p>
         <h2> Buy this : {name} </h2>
         <p>Only for : ${price}</p>
         <button onClick={() => addToCart(id)}>Add to Cart</button>
         <button onClick={() => deleteFromDb(id)}>Remove to list</button>
      </div>
   );
};

export default Cosmetic;