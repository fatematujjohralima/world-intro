import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ fetchCountries }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedCountries = (country) => {
        setVisitedCountries([...visitedCountries, country]);
        
    }
    
    const handleVisitedFlags = (flag) => {
        setVisitedFlags([...visitedFlags, flag]);
    }

    const countries = use(fetchCountries);
    const allCountries = countries.countries;
    console.log(allCountries);

    return (
        <div>
            <h3>There are {allCountries.length} countries in the world.</h3>
            <p>Visited Countries: {visitedCountries.length}</p>
            {
                <ol>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                
                </ol>
            }
            <h3>Visited Flags:</h3>
            <div className='flag-container'>
                {
                    visitedFlags.map(flag => <img src={flag} alt='flag' />)
                }
            </div>
            <h1>All Country</h1>
            <div className='country-container'>
                {
                    allCountries.map(country => <Country country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} ></Country>)

                }
            </div>
        </div>
            
    );
};

export default Countries;