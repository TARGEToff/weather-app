import React from 'react';
import styles from './WeatherForecast.module.scss';
import WeatherToday from 'components/molecules/WeatherToday/WeatherToday';
import WeatherTomorrow from 'components/molecules/WeatherTomorrow/WeatherTomorrow';

const WeatherForecast = () => (
    <div className={styles.weatherForecast}>
        <WeatherToday />
        <WeatherTomorrow />
    </div>
);

export default WeatherForecast;