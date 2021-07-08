import React, { useState } from "react";
import { useFormik } from 'formik';
import styles from 'styles/Home.module.scss';
import Heading from "components/atoms/Heading/Heading";
import WeatherForecast from "components/organisms/WeatherForecast/WeatherForecast";
import CurrentWeather from "components/molecules/CurrentWeather/CurrentWeather";
import weatherContext from "context";

export default function Home() {
    let [weather, setWeather] = useState();

    const getWeather = (city) => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=e2539f6cdffd467fa24171503212806&q=${city}&days=2`)
            .then(response => response.json())
            .then(response => { setWeather(response); console.log(response); }
            );
    };

    const formik = useFormik({
        initialValues: {
            city: '',
        },
        onSubmit: values => {
            getWeather(values.city);
        },
    });

    return (
        <div className={styles.wrapper}>
            <Heading isBig={true}>Weather</Heading>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="city"
                    name="city"
                    type="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                />
    
                <button type="submit">Submit</button>
            </form>

            <div className={styles.weather}>
                { weather ? 
                    <>
                        <CurrentWeather weather={weather} /> 
                        <weatherContext.Provider value={weather}>
                            <WeatherForecast weather={weather} />
                        </weatherContext.Provider>
                    </>      
                    : null }
            </div>
        </div>
    );
}
