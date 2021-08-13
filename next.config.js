/*eslint no-undef: "off"*/
require("dotenv").config();

module.exports = {
    reactStrictMode: true,

    images: {
        domains: ['cdn.weatherapi.com']
    },

    env: {
        apiKey: `${process.env.API_KEY}`
    }
};
