import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import React from 'react'

import GlobalLayout from '../layout'
import Test from '../page/test'
import Forbidden from '../page/error/forbidden'
import Nothing from '../page/error/nothing'

export const routes: RouteObject[] = [
  {
    element: <GlobalLayout />,
    children: [
      { index: true, element: <Navigate to={'test/1234?a=1&b=2&c=3'} /> },
      { path: '/test/:id', element: <Test /> },
      { path: 'need_auth', element: <Test /> },
      { path: 'forbidden', element: <Forbidden /> },
      { path: 'nothing', element: <Nothing /> },
      { path: '*', element: <Navigate to={'nothing'} replace /> },
    ],
  },
]
