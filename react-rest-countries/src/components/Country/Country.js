import React from 'react';
import './Country.css'

const Country = ( props ) => {
   const { name, area, population, region, flags } = props.country
   return (
      <div className='country'>
         <img style={{width: '100%', height: '210px'}} src={flags.png} alt={ name?.common } />
         <h2> Country Name : { name?.common } </h2>
         <h3> Region: { region } </h3>
         <p> Area: { area } </p>
         <p> Population: { population } </p>
      </div>
   );
};

export default Country;