import React from "react";
import styles from "./WeatherMoreInfo.module.scss";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Humidity from "public/humidity.svg";
import Gauge from "public/gauge.svg";
import WindDirection from "public/wind-direction.svg";
import WindVane from "public/wind-vane.svg";
import WeatherInfoItem from "./WeatherInfoItem/WeatherInfoItem";

const WeatherMoreInfo = () => (
    <div className={styles.moreInfo}>
        <Paragraph>Detailed information:</Paragraph>
        <div className={styles.items}>
            <div className={styles.firstSet}>
                <WeatherInfoItem imageSource={Humidity} type="humidity" unit="%"/>
                <WeatherInfoItem imageSource={Gauge} type="pressure_mb" unit="hPa"/>
            </div>
            <div className={styles.secondSet}>
                <WeatherInfoItem imageSource={WindVane} type="wind_kph" unit="kph" />
                <WeatherInfoItem imageSource={WindDirection} type="wind_dir" />
            </div>
        </div>
    </div>
);

export default WeatherMoreInfo;