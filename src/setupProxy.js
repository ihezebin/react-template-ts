// https://create-react-app.bootcss.com/docs/proxying-api-requests-in-development
// 目前仅支持 js 写法，不支持 ts 或其他，参考issues： https://github.com/facebook/create-react-app/issues/8273
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/user', {
      target: 'http://www.hezebin.com',
      changeOrigin: true,
      pathRewrite: {
        // '^/api': '',
      },
    }),
  )
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    }),
  )
}
