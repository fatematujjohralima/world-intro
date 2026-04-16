import React from 'react';
import './Country.css';

const Country = ({ country }) => {
    // console.log(country);
    return (
        <div className='country'>
            <img className='card-container' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
        </div>
    );
};

export default Country;