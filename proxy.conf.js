const PROXY_CONFIG = [
    {
        context:['/bc/'],
        target: 'http://localhost:8088/api/v1',
        secure :false,
        logLevel: 'debug',
        pathRewrite: { '^/bc': ''}
    }
]

module.exports = PROXY_CONFIG;
