// https://create-react-app.bootcss.com/docs/proxying-api-requests-in-development
import { createProxyMiddleware } from 'http-proxy-middleware'

export default function (app: any) {
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
