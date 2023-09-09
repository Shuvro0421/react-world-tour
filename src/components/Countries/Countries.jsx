import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags , setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = (country) => {

        
        const newVisitedCountry = [...visitedCountries, country];
        console.log(country);
        
        setVisitedCountries(newVisitedCountry);

    }

    const handleVisitedFlags = (flag) =>{
        const newVisitedFlags = [...visitedFlags , flag];
        setVisitedFlags(newVisitedFlags);
    }

    // remove item from a list from an array from a state
    // use filter to select all the element except you want to remove
    


    return (

        <div>
            <h3>Countries : {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h5>visited Countries : {visitedCountries.length} </h5>

                <ul>
                    {
                        
                        visitedCountries.map(country => <li key={country.cca3} style={{listStyle:"lower-roman" ,  textAlign: "left" }}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map((flag , idx) => <img key={idx} src={flag}></img>)
                }

            </div>
            {/* display countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;