import React, { use } from 'react';

const Countries = ({ fetchCountries }) => {
    const countries = use(fetchCountries);
    console.log(countries);
    return (
        <div>
            
        </div>
    );
};

export default Countries;