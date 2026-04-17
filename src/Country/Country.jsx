import React, { useState } from 'react';
import './Country.css';


const Country = ({ country, handleVisitedCountries ,handleVisitedFlags }) => {
    // console.log(country);
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries);
    

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
        // handleVisitedFlags(country.flags.flags.png);
       
    }
        return (
            
        <div className={`country ${visited && 'visited-country'}`}>
            
            <img className='card-container' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => handleVisitedFlags(country.flags.flags.png)}>Add visited flag</button>
        </div>
    );
};



export default Country;
