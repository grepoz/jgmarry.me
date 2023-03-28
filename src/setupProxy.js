const { createProxyMiddleware } = require('http-proxy-middleware'); // have to be CommonJS module (old fashion)

const BACKEND_URL = process.env.BACKEND_URL || (process.env.REACT_APP_DOCKERENV 
    ? "http://rnn:4000" : "http://127.0.0.1:4000");

const backendProxyPOST = {
    target: BACKEND_URL,
    changeOrigin: true
}

const backendProxyPUT = {
    target: BACKEND_URL,
    changeOrigin: true,
    headers: {
        accept: "application/json",
        method: "PUT",
    },
}

module.exports = function (app) {

    app.use(
        "/login",
        createProxyMiddleware(backendProxyPOST)
    );

    app.use(
        "/signup",
        createProxyMiddleware(backendProxyPUT)
    );
};
