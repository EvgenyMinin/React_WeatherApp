import React from 'react';

const Weather = props => (
    <div className="weather-info">
        {props.city &&
            <div>
                <p className="weather-key">Местоположение: <span className="weather-value">{props.city}, {props.country}</span></p>
                <p className="weather-key">Температура: <span className="weather-value">{props.temp}°С</span></p>
                <p className="weather-key">Давление: <span className="weather-value">{props.pressure} мм рт. ст.</span></p>
                <p className="weather-key">Скорость ветра: <span className="weather-value">{props.wind} м/с</span></p>
                <p className="weather-key">Влажность: <span className="weather-value">{props.humidity}%</span></p>
            </div>
        }
        <p className="weather-error">{props.error}</p>
    </div>
)

export default Weather;