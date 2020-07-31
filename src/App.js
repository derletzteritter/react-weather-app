import React, { useState, useEffect } from 'react'

import styled from 'styled-components';

import './App.css'

const WeatherContainer = styled('div')`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #e74c3c;
    width: 900px;
    height: 600px;
    -webkit-box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.75)
`;

const WeatherInfo = styled('div')`
    color: #fff;
    font-size: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const SelectCity = styled('div')`
    color: #fff;position: fixed;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    text-align: center;
    justify-content: center;
    align-items: center;

`;

const api = {
    key: '154321819d8322e757d41adec37e84ce',
    base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
    const [weather, setWeather] = useState({});
    const [query, setQuery] = useState('');

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
            });
        }
    }


    return (
        <div>       
            <WeatherContainer>
            {typeof weather.main != 'undefined' ? (
            <>
            <div>
                <WeatherInfo>
                    <p>{weather.name}, {weather.sys.country} </p>
                    <p style={{ fontSize: '38px', marginTop: '-35px'}}>{Math.round(weather.main.temp)}°c</p>
                    <p style={{ fontSize: '40px', marginTop: '-20px'}}>{weather.weather[0].description}</p>
                </WeatherInfo>
            </div>
            </>
            ): null}
            <SelectCity>
                <input 
                    placeholder='city + enter'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                </SelectCity>
            </WeatherContainer>
        </div>
    )
}

export default App;
