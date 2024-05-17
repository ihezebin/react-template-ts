import { ENV_PROD, newApi, usingToken } from '@hezebin/doraemon'
import { message, notification } from 'antd'

const baseURL = process.env.NODE_ENV === ENV_PROD ? '/api' : 'http://127.0.0.1:8080'
const timeout = process.env.NODE_ENV === ENV_PROD ? 5000 : 0

export const api = newApi({
  baseURL: baseURL,
  timeout: timeout,
  withToken: () => {
    const [token] = usingToken()
    return token
  },
  onResponse: (res) => {
    if (res?.code !== 0 && res?.code !== 11) {
      message.error(res?.message)
    }
    return res
  },
  onError: (err) => {
    if (err.status) {
      // 有响应错误处理
      message.error(err?.message)
    } else {
      // 无响应错误处理
      notification.error({
        message: err.message,
        description: (
          <span style={{ color: 'gray', fontSize: '13px' }}>{`错误码: ${err.code}`}</span>
        ),
      })
    }
    return err
  },
})
