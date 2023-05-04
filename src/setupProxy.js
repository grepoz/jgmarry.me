const { createProxyMiddleware } = require('http-proxy-middleware'); // have to be CommonJS module (old fashion)

const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5001/wedding-41b3e/us-central1";

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
