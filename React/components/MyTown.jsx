import React, { useState, useEffect } from 'react';

const MyTown = () =>{
    const [temp, setTemp] = useState(null);
    const [isFahrenheit, setIsFahrenheit] = useState(false)

    useEffect(() => {
            const fetchWeather = async () => {
                const res = await fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=25.06&longitude=-77.34&current=temperature_2m"
                );
            const data = await res.json();
            setTemp(data.current.temperature_2m);
            };
            fetchWeather();
            }, []); 

    return(
        <>
        <div>
        <img className='home' src="../src/assets/Bahamas1.JPEG" alt="242" />
        <br />
        <h1>I'm from The Bahamas</h1>
        <p>It's an Archipelago in the Caribbean, home to some of the most beautiful beaches in the world!</p>
        </div>
        <br />
        <br />
        <br />


        <div>
            {temp !== null ? (
                <>
                    <p>
                        Nassau:{" "}
                        {isFahrenheit ? (temp * 9/5 + 32).toFixed(1) : temp}°
                        {isFahrenheit ? "F" : "C"}
                    </p>
                    <button onClick={() => setIsFahrenheit(!isFahrenheit)}>
                        Change to °{isFahrenheit ? "C" : "F"}
                    </button>
                </>
            ) : (
                <p>Loading weather...</p>
            )}
           
        </div>
        </>
    );
}

export default MyTown;