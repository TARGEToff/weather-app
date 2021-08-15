import React from "react";
import styles from "./CurrentWeather.module.scss";
import Image from "next/image";
import { Paragraph } from "components/atoms/Paragraph/Paragraph";
import { Heading } from "components/atoms/Heading/Heading";


const CurrentWeather = ({ weather }) => {

    const weatherIcon = weather.current.condition.icon.replace(/64/g, "128");

    return(
        <div className={styles.currentWeather}>
            <Paragraph isBig>
                {weather.location.name}, {weather.location.country}
            </Paragraph>
            <div className={styles.details}>
                <Image
                    src={`https:${weatherIcon}`}
                    alt="Current weather icon"
                    width={128}
                    height={128}
                />
                <Heading>{weather.current.temp_c}°C</Heading>
            </div>
            <Paragraph isBig>{weather.current.condition.text}</Paragraph>

        </div>
    );
 
};

export { CurrentWeather };
