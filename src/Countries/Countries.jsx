import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const allCountries = countries.countries;
    console.log(allCountries);
    return (
        <div>
            <h3>There are {allCountries.length} countries in the world.</h3>
            <div>
                {
                    allCountries.map(country => <Country country={country} ></Country>)
                }
            </div>
        </div>
            
    );
};

export default Countries;