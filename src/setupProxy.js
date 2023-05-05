const { createProxyMiddleware } = require('http-proxy-middleware'); // have to be CommonJS module (old fashion)

const BACKEND_URL = "https://us-central1-wedding-41b3e.cloudfunctions.net";

const backendProxyPOST = {
    target: BACKEND_URL,
    changeOrigin: true,
    headers: {
        accept: "application/json",
        method: "POST",
    },
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
