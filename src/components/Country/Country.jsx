import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './country.css'
const Country = ({ country, handleVisitedCountry , handleVisitedFlags}) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);

    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>

            <h3 style={{ color: visited ? 'crimson' : 'white' }}>Name: {name?.common ? name.common : 'No Name'}</h3>
            <img className='img' src={flags?.png ? flags.png : 'No flag'} alt={name?.common ? name.common : 'No Name'} />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>

            <div className='btn'>
                <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
                <button onClick={handleVisited}>{!visited ? 'Going' : 'Visited'}</button>
                <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            </div>
            <hr />
            <CountryDetail country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}>
            </CountryDetail>


        </div>
    );
};

export default Country;