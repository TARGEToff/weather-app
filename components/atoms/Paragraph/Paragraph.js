import React from "react";
import PropTypes from "prop-types";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ isBig = false, children }) => (
    <>
        {isBig ? (
            <p className={styles.big}>{children}</p>
        ) : (
            <p className={styles.normal}>{children}</p>
        )}
    </>
);

Paragraph.propTypes = {
    isBig: PropTypes.bool,
};

export default Paragraph;
