import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Test, TestSub } from '../page/test'
import App from '../page'
import Forbidden from '../page/error/forbidden'
import Nothing from '../page/error/nothing'

//  authRoute 检查认证状态，如果已认证则返回原页面组件，否则返回做无权限处理
const authRoute = (element: JSX.Element) => {
  const authed = localStorage.getItem('token')
  return authed ? element : <Navigate to={'/forbidden'} replace />
}

// https://reactrouter.com/en/6.21.1/route/route#index
const Router = () =>
  useRoutes([
    { path: '/test', element: <Test /> },
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Navigate to={'sub/test_id?name=korbin'} /> },
        { path: '/sub/:id', element: <TestSub /> },
        { path: '/need_auth', element: authRoute(<Test />) },
      ],
    },
    { path: '/forbidden', element: <Forbidden /> },
    { path: '*', element: <Nothing /> },
  ])
export default Router
