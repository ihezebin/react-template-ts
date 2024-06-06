import React, { useEffect } from 'react'
import { Navigate, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import { getLocalItem, KEY_TOKEN, setLocalItem } from '@hezebin/doraemon'

import GlobalLayout from '../layout'
import Forbidden from '../page/error/forbidden'
import Nothing from '../page/error/nothing'
import Test from '../page/test'
import { unsubscribeStore, useStore } from '../store'
import { handleUnAuthorized } from '../util'
import { api } from '../api'

//  authRoute 检查认证状态，如果已认证则返回原页面组件，否则返回做无权限处理
const authRoute = (element: React.ReactElement) => {
  const authed = localStorage.getItem('token')
  return authed ? element : <Navigate to={'/forbidden'} replace />
}

// https://reactrouter.com/en/6.21.1/route/route#index
const Router = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { setUser, clearUser } = useStore()

  useEffect(() => {
    // 如果当前地址后面带了 token query 参数，则将 token 写到本地
    if (location.search) {
      const newToken = new URLSearchParams(location.search).get(KEY_TOKEN)
      if (newToken) {
        console.log(newToken)
        setLocalItem(KEY_TOKEN, newToken)
        navigate(location.pathname)
        return
      }
    }

    const token = getLocalItem(KEY_TOKEN)
    if (token) {
      api
        .get('/user/check_token', { token })
        .then(({ code, message: msg, data, status }) => {
          if (status !== 200 || code !== 0) {
            console.error('Authorization Failed:', msg)
            handleUnAuthorized(clearUser)
          }
          if (code === 0 && data?.user) {
            setUser(data.user)
          }
        })
        .catch((err) => {
          console.error('Authorization Error:', err)
          handleUnAuthorized(clearUser)
        })
    }

    return () => {
      unsubscribeStore()
    }
  }, [])

  return useRoutes([
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
}
export default Router
