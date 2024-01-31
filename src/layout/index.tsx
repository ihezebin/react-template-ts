import { Layout } from '@hezebin/doraemon'
import { Outlet } from 'react-router-dom'
import { menuConfig } from './menu.config'

// const { AnimateCss } = Animate
const GlobalLayout = () => {
  return (
    <Layout
      mode={'siderLeft'}
      header={'header'}
      brand={{
        content: 'React-Template-Ts',
        collapsedContent: 'RTT11111111',
      }}
      menu={menuConfig}
      content={<Outlet />}
      footer={'footer'}
    />
  )
}

export default GlobalLayout
