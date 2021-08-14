import React from "react";
import Image from "next/image";
import styles from "./SingleHourWeather.module.scss";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import weatherContext from "context";

const SingleHourWeather = ({ day, hour }) => (
    <weatherContext.Consumer>
        {(weather) => (
            <div className={styles.SingleHourWeather}>
                <Paragraph>{hour}:00</Paragraph>
                <div className={styles.details}>
                    <Image
                        src={`https:${weather.forecast.forecastday[day].hour[hour].condition.icon}`}
                        alt={`${hour} forecast weather icon`}
                        width={64}
                        height={64}
                    />
                    <div className={styles.detailsText}>
                        <Paragraph>{weather.forecast.forecastday[day].hour[hour].condition.text}</Paragraph>
                        <Paragraph>{weather.forecast.forecastday[day].hour[hour].wind_kph} kph</Paragraph>
                    </div>
                    <Paragraph isBig>
                        {weather.forecast.forecastday[day].hour[hour].temp_c}°C
                    </Paragraph>
                </div>
            </div>
        )}
    </weatherContext.Consumer>
);

export default SingleHourWeather;
