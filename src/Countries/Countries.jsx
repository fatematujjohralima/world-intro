import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ fetchCountries }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        setVisitedCountries([...visitedCountries, country]);
        
        }


    const countries = use(fetchCountries);
    const allCountries = countries.countries;
    console.log(allCountries);

    
        

    

    return (
        <div>
            <h3>There are {allCountries.length} countries in the world.</h3>
            <p>Visited Countries: {visitedCountries.length}</p>
            <div className='country-container'>
                {
                    allCountries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} ></Country>)

                }
            </div>
        </div>
            
    );
};

export default Countries;