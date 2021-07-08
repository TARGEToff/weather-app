import React from 'react';
import styles from './WeatherToday.module.scss';
import SingleHourWeather from 'components/molecules/SingleHourWeather/SingleHourWeather';
import weatherContext from "context";

const WeatherToday = () => (
    <div className={styles.weatherToday}>
        <weatherContext.Consumer>
            {(weather) => 
                <>
                    <p>Today</p>
                    <SingleHourWeather day={0} hour={6} weather={weather} />
                    <SingleHourWeather day={0} hour={12} weather={weather} />
                    <SingleHourWeather day={0} hour={18} weather={weather} />
                </>}
        </weatherContext.Consumer> 
    </div>
);

export default WeatherToday;