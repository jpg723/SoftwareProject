<<<<<<< Updated upstream
const {createProxyMiddleware} =require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target : 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};
=======
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );

};
>>>>>>> Stashed changes
