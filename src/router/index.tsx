import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useRoutes } from 'react-router-dom'
import { KEY_TOKEN } from '@hezebin/doraemon'
import { message, Spin } from 'antd'

import GlobalLayout from '../layout'
import Forbidden from '../page/error/forbidden'
import Nothing from '../page/error/nothing'
import { unsubscribeStore, useStore } from '../store'
import { handleUnAuthorized } from '../util'
import { api } from '../api'
import Test from '../page/test'

//  authRoute 检查认证状态，如果已认证则返回原页面组件，否则返回做无权限处理
const authRoute = (element: React.ReactElement) => {
  const authed = localStorage.getItem('token')
  return authed ? element : <Navigate to={'/forbidden'} replace />
}

// https://reactrouter.com/en/6.21.1/route/route#index
const Router = () => {
  const navigate = useNavigate()
  const { setUser, clearUser, token, setToken } = useStore()
  const [authing, setAuthing] = useState<boolean>(true)

  const routes = useRoutes([
    {
      element: <GlobalLayout />,
      children: [
        { index: true, element: <Navigate to={'test/1234?a=1&b=2&c=3'} /> },
        { path: '/test/:id', element: <Test /> },
        { path: 'need_auth', element: authRoute(<Test />) },
        { path: 'forbidden', element: <Forbidden /> },
        { path: 'nothing', element: <Nothing /> },
        { path: '*', element: <Navigate to={'nothing'} replace /> },
      ],
    },
  ])

  useEffect(() => {
    // 如果当前地址后面带了 token query 参数，则将 token 写到本地
    if (location.search) {
      const newToken = new URLSearchParams(location.search).get(KEY_TOKEN)
      if (newToken) {
        console.log(newToken)
        setToken(newToken)
        navigate(location.pathname + location.hash)
        return
      }
    }

    if (token) {
      api
        .get('/user/check_token', { token })
        .then(({ code, message: msg, data, status }) => {
          if (status == 401) {
            clearUser()
            message.error(msg).then(() => handleUnAuthorized())
            return
          }
          if (status !== 200 || code !== 0) {
            console.error('Authorization Failed:', msg)
            return
          }
          if (code === 0 && data?.user) {
            setUser(data.user)
            setAuthing(false)
          }
        })
        .catch((err) => {
          console.error('Authorization Error:', err)
          handleUnAuthorized(clearUser)
        })
    } else {
      clearUser()
      setAuthing(false)
    }

    return () => {
      unsubscribeStore()
    }
  }, [token])

  return (
    <Spin
      style={{
        maxHeight: 'initial',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      spinning={authing}
      tip={'加载账号数据...'}
      size={'large'}>
      {!authing && routes}
    </Spin>
  )
}
export default Router
