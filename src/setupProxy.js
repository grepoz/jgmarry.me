import { createProxyMiddleware } from 'http-proxy-middleware';

let BACKEND_URL = "http://127.0.0.1:4000";

if (!!(process.env.REACT_APP_DOCKERENV)) {
    BACKEND_URL = "http://rnn:4000";
}

const backendProxyPOST = {
    target: BACKEND_URL,
    changeOrigin: true
}

const backendProxyGET = {
    target: BACKEND_URL,
    changeOrigin: true,
    headers: {
        accept: "application/json",
        method: "GET",
    },
}

module.exports = function (app) {

    app.use(
        "/login",
        createProxyMiddleware(backendProxyGET)
    );

    app.use(
        "/signupFamily",
        createProxyMiddleware(backendProxyPOST)
    );
};
