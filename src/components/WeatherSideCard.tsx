import React from 'react';

interface IProps {
    humidity: number;
    wind: number;
}

const WeatherSideCard = ({humidity,wind}: IProps) => {
    return (
        <div className="side-container">
            <div className="side-row">
                <h4>HUMIDITY</h4>
                <p>{humidity}%</p>
            </div>
            <div className="side-row">
                <h4>WIND</h4>
                <p>{wind} km/h</p>
            </div>
        </div>
    );
};

export default WeatherSideCard;