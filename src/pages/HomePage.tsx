import React, {useEffect, useState} from 'react'
import useGeoLocation from "../hooks/useGeoLocation";
import {IPoint, IWeatherListItem} from "../types/IWeather";
import WeatherSideCard from "../components/WeatherSideCard";
import WeatherCard from "../components/WeatherCard";
import Clock from "../components/Clock";


const HomePage = () => {
    const [weather, setWeather] = useState<IWeatherListItem>();
    const {loaded, coordinates, error} = useGeoLocation();


    const getApi = (coordinates: IPoint) => `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&appid=6dc9c2a99870e8a1a5ff5c72ecc15d4e`;

    const fetchData = () => {
        fetch(getApi(coordinates!))
            .then(response => response.json())
            .then(data => {
                setWeather(data);
                })
            .catch(err => {
                console.log('Error Occured:', err)
            });
    }


    useEffect(() => {
        loaded && error?.code !== 1 && fetchData();
        loaded && error?.code !== 1 && setInterval(fetchData, 60000);
    }, [coordinates, error?.code, loaded])


    return (
        <>

            {(loaded && weather !== undefined) ?
                <>
                    <WeatherCard temperature={weather?.main.temp} weatherType={weather?.weather[0].main}/>
                    <WeatherSideCard humidity={weather!.main.humidity} wind={weather!.wind.speed}/>
                </> :
                <div className="card-container items-center">
                    {error?.code !== 1 ?
                        <span>Loading ...</span> :
                        <span>Please allow location access!</span>
                    }
                </div>
            }

        </>
    );
}

export default HomePage