import React from 'react';
import {Month, Weekdays} from "../types/IWeather";

const getImageByWeather = (weather: String) => {
    switch (weather) {
        case 'sunny':
        case 'clear':
        case 'rainy':
        case 'rain':
        case 'thunderstorm':
            return require(`../assets/${weather}.png`);
        default:
            return require('../assets/default.png');
    }
}

interface IProps {
    temperature: number;
    weatherType: String;
}


const WeatherCard = ({temperature, weatherType}: IProps) => {
    let objToday = new Date();
    const dayOfWeek = Weekdays[objToday.getDay()];
    const curMonth = Month[objToday.getMonth()];
    const dayOfMonth = objToday.getDate();
    const currYear = objToday.getFullYear();

    return (
        <div className="card-container">
            <img src={getImageByWeather(weatherType.toLowerCase())}
                 className="card-image"
                 alt="weather-display"/>
            <div className="date-and-day-container">
                <h3>{dayOfWeek}</h3>
                <div>
                    <p>{dayOfMonth}</p>
                    <p>{curMonth}</p>
                    <p>{currYear}</p>
                </div>

            </div>
            <div className="temperature-container">
                <div>
                    <h1>{temperature} &#176;C</h1>
                    <h3>{weatherType}</h3>
                </div>

            </div>
        </div>
    );
};

export default WeatherCard;