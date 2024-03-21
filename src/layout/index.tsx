import { Layout, usingToken } from '@hezebin/doraemon'
import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { menuItemsConfig } from './menu.config'

// const { AnimateCss } = Animate
const GlobalLayout = () => {
  const navigate = useNavigate()

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
      // dark
      height={'100vh'}
      brand={<div style={{ color: 'gray', fontSize: 20 }}>React-Template-Ts</div>}
      header={<></>}
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
      menu={{
        onClick: handleMenuClick,
        selectedKeys: location?.pathname.split('/').reverse(),
        items: menuItemsConfig,
      }}>
      <Outlet />
    </Layout>
  )
}

export default GlobalLayout
