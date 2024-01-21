// https://create-react-app.bootcss.com/docs/proxying-api-requests-in-development
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  )
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://localhost:6000',
      changeOrigin: true,
    }),
  )
}
