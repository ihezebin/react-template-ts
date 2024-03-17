import { Layout, usingToken } from '@hezebin/doraemon'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

import { menuConfig } from './menu.config'

// const { AnimateCss } = Animate
const GlobalLayout = () => {
  useEffect(() => {
    const [, setToken] = usingToken()
    setToken('default token')
  }, [])

  return (
    <Layout
      mode={'siderLeft'}
      header={'header'}
      brand={{
        content: 'React-Template-Ts',
        collapsedContent: 'RTT',
      }}
      menu={menuConfig}
      content={<Outlet />}
      footer={'footer'}
    />
  )
}

export default GlobalLayout
