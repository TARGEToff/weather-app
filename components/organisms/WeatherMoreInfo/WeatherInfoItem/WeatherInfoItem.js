import React from 'react';
import Image from "next/image";
import styles from './WeatherInfoItem.module.scss';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import weatherContext from "context";

const WeatherInfoItem = ({ imageSource, type, unit }) => (
    <div className={styles.wrapper}>
        <weatherContext.Consumer>
            {(weather) => 
                <>
                    <Image alt="weather" width={38} height={38} src={imageSource} />
                    { unit ? <Paragraph>{`${weather.current[type]} ${unit}`}</Paragraph> : <Paragraph>{weather.current[type]}</Paragraph>}
                    
                </>
            }
        </weatherContext.Consumer>
    </div>
);

export default WeatherInfoItem;