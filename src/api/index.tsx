import { newApi, usingToken } from '@hezebin/doraemon'
import { message, notification } from 'antd'

export const api = newApi({
  baseURL: 'http://127.0.0.1:8080/api/',
  withToken: () => {
    const [token] = usingToken()
    return token
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
