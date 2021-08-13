import React, { useState } from "react";
import styles from "./WeatherForecast.module.scss";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import SingleHourWeather from "components/molecules/SingleHourWeather/SingleHourWeather";
import clsx from "clsx";

const WeatherForecast = () => {
    let [forecastVisibility, setForecastVisibility] = useState("today");

    let forecastResult;
    forecastVisibility === "today" ? forecastResult = 1 : forecastResult = 0;

    return (
        <div className={styles.weatherForecast}>
            <div className={styles.forecastNavbar}>
                <button
                    className={clsx(styles.button, {
                        [styles.active]: forecastVisibility === "today",
                    })}
                    onClick={() => setForecastVisibility("today")}
                >
                    <Paragraph>Today</Paragraph>
                </button>
                <button
                    className={clsx(styles.button, {
                        [styles.active]: forecastVisibility === "tomorrow",
                    })}
                    onClick={() => setForecastVisibility("tomorrow")}
                >
                    <Paragraph>Tomorrow</Paragraph>
                </button>
            </div>
            <div className={styles.forecast}>
                <SingleHourWeather day={forecastResult} hour={6} />
                <SingleHourWeather day={forecastResult} hour={12} />
                <SingleHourWeather day={forecastResult} hour={18} />
            </div>
        </div>
    );
};

export default WeatherForecast;
