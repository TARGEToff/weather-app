import React from 'react';
import Image from 'next/image';
import styles from './SingleHourWeather.module.scss';

const SingleHourWeather = ({ day, hour, weather}) => (
    <div className={styles.SingleHourWeather}> 
        <p>{hour}:00</p>
        <Image
            src={`https:${weather.forecast.forecastday[day].hour[hour].condition.icon}`}
            alt="Current weather icon"
            width={64}
            height={64}
            className={styles.SingleHourImage}
        />
        <p>{weather.forecast.forecastday[day].hour[hour].temp_c}°C</p>
    </div>
);

export default SingleHourWeather;