import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "styles/Home.module.scss";
import Heading from "components/atoms/Heading/Heading";
import WeatherForecast from "components/organisms/WeatherForecast/WeatherForecast";
import CurrentWeather from "components/molecules/CurrentWeather/CurrentWeather";
import WeatherMoreInfo from "components/organisms/WeatherMoreInfo/WeatherMoreInfo";
import weatherContext from "context";
import Image from "next/image";
import searchLoupe from "public/loupe.svg";
import geoSvg from "public/gps.svg";
import Paragraph from "components/atoms/Paragraph/Paragraph";

/*eslint no-undef: "off"*/
const apiKey = process.env.apiKey;

export default function Home() {
    let [weather, setWeather] = useState();
    let [geoSupport, setGeoSupport] = useState(true);
    let [geoError, setGeoError] = useState(false);

    const getWeather = (city) => {
        fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=2`
        )
            .then((response) => response.json())
            .then((response) => {
                setWeather(response);
                console.log(response);
            });
    };

    const getGeo = () => {
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const geolocation = `${latitude},${longitude}`;

            getWeather(geolocation);
        }

        function error() {
            setGeoError(true);
        }

        if (!navigator.geolocation) {
            setGeoSupport(false);
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.city) {
            errors.city = "City field is required";
        }
        if (values.city.length > 20) {
            errors.city = "Too many characters";
        }
        if (values.city.length < 3) {
            errors.city = "Not enough characters";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            city: "",
        },
        validate,
        onSubmit: (values) => {
            getWeather(values.city);
            formik.resetForm();
        },
    });

    return (
        <div className={styles.wrapper}>
            <Heading isBig={true}>Weather</Heading>
            <div className={styles.form}>
                <form onSubmit={formik.handleSubmit}>
                    <input
                        placeholder="city"
                        id="city"
                        name="city"
                        type="city"
                        onChange={formik.handleChange}
                        className={styles.input}
                        value={formik.values.city}
                    />
                    <button type="submit" className={styles.submit}>
                        <Image
                            alt="searchButton"
                            width={18}
                            height={18}
                            src={searchLoupe}
                        />
                    </button>
                </form>
                <button className={styles.submitGeo} onClick={() => getGeo()}>
                    <Image
                        alt="geoButton"
                        width={20}
                        height={20}
                        src={geoSvg}
                    />
                </button>
            </div>
            { geoSupport ? null : <Paragraph isBig={true}>Your browser don&apos;t support geolocation</Paragraph> }
            { geoError ? <Paragraph isBig={true}>Unable to get localization</Paragraph> : null }
            <Paragraph>{formik.errors.city}</Paragraph>

            <div className={styles.weather}>
                {weather ? (
                    <>
                        {weather.current ? 
                            <>
                                <CurrentWeather weather={weather} />
                                <weatherContext.Provider value={weather}>
                                    <WeatherForecast />
                                    <WeatherMoreInfo />
                                </weatherContext.Provider>
                            </>
                            : null}
                    </>
                ) : null}
            </div>
        </div>
    );
}
