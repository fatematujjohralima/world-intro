import React, { use } from 'react';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    const allCountries = countries.countries;
    console.log(allCountries);
    return (
        <div>
            <h3>There are {allCountries.length} countries in the world.</h3>
        </div>
    );
};

export default Countries;