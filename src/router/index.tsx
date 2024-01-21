import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Forbidden from '../page/error/forbidden'
import Nothing from '../page/error/nothing'
import Test from '../page/test'

//  authRoute 检查认证状态，如果已认证则返回原页面组件，否则返回做无权限处理
const authRoute = (element: JSX.Element) => {
  const authed = localStorage.getItem('token')
  return authed ? element : <Navigate to={'/forbidden'} replace />
}

// https://reactrouter.com/en/6.21.1/route/route#index
const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Navigate to={'test/1234?a=1&b=2&c=3'} /> },
        { path: '/sub_test', element: <Test /> },
      ],
    },
    { path: '/test/:id', element: <Test /> },
    { path: '/need_auth', element: authRoute(<Test />) },
    { path: '/forbidden', element: <Forbidden /> },
    { path: '*', element: <Nothing /> },
  ])
export default Router
