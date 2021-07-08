import React from 'react';
import styles from './WeatherTomorrow.module.scss';
import SingleHourWeather from 'components/molecules/SingleHourWeather/SingleHourWeather';
import weatherContext from "context";

const WeatherTomorrow = () => (
    <div className={styles.weatherTomorrow}>
        <weatherContext.Consumer>
            {(weather) => 
                <>
                    <p>Tomorrow</p>
                    <SingleHourWeather day={1} hour={6} weather={weather} />
                    <SingleHourWeather day={1} hour={12} weather={weather} />
                    <SingleHourWeather day={1} hour={18} weather={weather} />
                </>}
        </weatherContext.Consumer> 
    </div>
);

export default WeatherTomorrow;