import { Layout, usingToken } from '@hezebin/doraemon'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Switch } from 'antd'

import { useStore } from '../store'

import style from './index.module.scss'
import { menuConfig } from './menu.config'

// const { AnimateCss } = Animate
const GlobalLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const navigate = useNavigate()
  const { themeDark, setThemeDark } = useStore()

  useEffect(() => {
    const [, setToken] = usingToken()
    setToken('default token')
  }, [])

  const handleMenuClick = (keys: string[]) => {
    const path = ('/' + keys.reverse().join('/')).replace('//', '/')
    navigate(path)
  }

  return (
    <Layout
      dark={themeDark}
      height={'100vh'}
      collapsed={collapsed}
      brand={
        <div className={style.brand} onClick={() => navigate('/')}>
          React-Template-Ts
        </div>
      }
      header={
        <div className={style.header}>
          <div onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <Switch
            checkedChildren="🌛"
            unCheckedChildren="🔆"
            checked={themeDark}
            onClick={() => setThemeDark(!themeDark)}
          />
        </div>
      }
      footer={
        <div
          style={{
            height: '48px',
            lineHeight: '48px',
            textAlign: 'center',
            color: '#adadad',
            fontWeight: 'lighter',
          }}>
          @copyright Doraemon
        </div>
      }
      onClick={handleMenuClick}
      selectedKeys={location?.pathname.split('/').reverse()}
      menu={useMemo(() => menuConfig, [])}>
      <Outlet />
    </Layout>
  )
}

export default GlobalLayout
