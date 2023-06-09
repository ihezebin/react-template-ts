import React from "react";
import {useRoutes, Navigate} from "react-router-dom";
import {Test, TestSub} from "../pages/test";
import App from "../pages";
import Forbidden from "../pages/errors/forbidden";
import Nothing from "../pages/errors/nothing";

//  authRoute 检查认证状态，如果已认证则返回原页面组件，否则返回做无权限处理
const authRoute = (element: JSX.Element) => {
    const authed = localStorage.getItem('token')
    return authed ? element : <Navigate to={'/forbidden'} replace/>
}


const routers = [
    {path: '/test', element: <Test/>},
    {path: '/', element: <App/>, children: [
            {index: true, element:<Navigate to={'sub/test_id?name=korbin'}/>},
            {path: '/sub/:id', element: <TestSub/>},
            {path: '/need_auth', element: authRoute(<Test/>)},
        ]
    },
    {path: '/forbidden', element: <Forbidden/>},
    {path: '*', element: <Nothing/>},
]

const Router = () => useRoutes(routers)
export default Router