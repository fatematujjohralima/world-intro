import React, { useState } from 'react';
import './Country.css';

const Country = ({ country }) => {
    // console.log(country);
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
        return (
        <div className='country'>
            <img className='card-container' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};



export default Country;
