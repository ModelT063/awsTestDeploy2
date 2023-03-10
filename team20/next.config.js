/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      return {
        // environment varibales for local development
        env: {
          IDP_DOMAIN: "https://team20-truckdrivers.auth.us-east-1.amazoncognito.com",
          USER_POOL_ID: "us-east-1_uXeFvCqps",
          USER_POOL_CLIENT_ID: "39tpk87ra9174ka9vv6trla406",
          REDIRECT_SIGN_IN: "http://localhost:3000/token",
          REDIRECT_SIGN_OUT: "http://localhost:3000/",
          AUTH_COOKIE_DOMAIN: "localhost",
        },
      };
    default:
      return {
        // environment varibales for production
        env: {
          IDP_DOMAIN: " ",
          USER_POOL_ID: " ",
          USER_POOL_CLIENT_ID: " ",
          REDIRECT_SIGN_IN: " ",
          REDIRECT_SIGN_OUT: " ",
          AUTH_COOKIE_DOMAIN: " ",
        },
      };
  }
};
