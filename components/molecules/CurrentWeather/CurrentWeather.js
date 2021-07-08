import React from 'react';
import styles from './CurrentWeather.module.scss';
import Image from 'next/image';

const CurrentWeather = ({ weather }) => (
    <div className={styles.currentWeather}> 
        <Image
            src={`https:${weather.current.condition.icon}`}
            alt="Current weather icon"
            width={64}
            height={64}
        />
        <p>{weather.location.name}, {weather.location.country}</p> 
        <p>{weather.current.condition.text}</p>
        <p>temperature: {weather.current.temp_c}°C</p>
        <p>perceived temperature: {weather.current.feelslike_c}°C</p>
    </div>
);

export default CurrentWeather;