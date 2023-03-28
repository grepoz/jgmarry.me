const { createProxyMiddleware } = require('http-proxy-middleware'); // have to be CommonJS module (old fashion)

const BACKEND_URL = process.env.BACKEND_URL || (process.env.REACT_APP_DOCKERENV 
    ? "http://jgmarry.me.backend:4000" : "http://127.0.0.1:4000");

console.log(`\nprocess.env.REACT_APP_DOCKERENV: ${process.env.REACT_APP_DOCKERENV}`)

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

console.log(`\n ======= Backend url:${BACKEND_URL} ======= \n`);

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
