import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
   // const cosmetics = [
   //    {id: 1, name: 'Alta', price: 100},
   //    {id: 2, name: 'palis', price: 200},
   //    {id: 3, name: 'malis', price: 500},
   //    {id: 4, name: 'balis', price: 300},
   //    {id: 5, name: 'nalis', price: 600},
   //    {id: 6, name: 'shalis', price: 500},
   // ]

   const [cosmetics, setCosmetics] = useState([])

   useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setCosmetics(data))
   }, [])

   const total = getTotal(cosmetics)

   return (
      <div>
         <h1> Welcome to my Cosmetics store </h1>
         <p>Money needed: { total } </p>
         {
            cosmetics.map(cosmetic => <Cosmetic 
                     key={cosmetic.id} 
                     cosmetic={cosmetic}></Cosmetic>)
         }
      </div>
   );
};

export default Cosmetics;