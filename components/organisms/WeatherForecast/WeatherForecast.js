import React, { useState } from "react";
import styles from "./WeatherForecast.module.scss";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import SingleHourWeather from "components/molecules/SingleHourWeather/SingleHourWeather";
import clsx from "clsx";

const WeatherForecast = () => {
    const [forecastVisibility, setForecastVisibility] = useState(0);

    return (
        <div className={styles.weatherForecast}>
            <div className={styles.forecastNavbar}>
                <button
                    className={clsx(styles.button, {
                        [styles.active]: forecastVisibility === 0,
                    })}
                    onClick={() => setForecastVisibility(0)}
                >
                    <Paragraph>Today</Paragraph>
                </button>
                <button
                    className={clsx(styles.button, {
                        [styles.active]: forecastVisibility === 1,
                    })}
                    onClick={() => setForecastVisibility(1)}
                >
                    <Paragraph>Tomorrow</Paragraph>
                </button>
            </div>
            <div className={styles.forecast}>
                <SingleHourWeather day={forecastVisibility} hour={6} />
                <SingleHourWeather day={forecastVisibility} hour={12} />
                <SingleHourWeather day={forecastVisibility} hour={18} />
            </div>
        </div>
    );
};

export default WeatherForecast;
