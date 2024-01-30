import { Animate, Layout } from '@hezebin/doraemon'
import { ApiOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'

const { AnimateCss } = Animate
const GlobalLayout = () => {
  return (
    <Layout
      mode={'siderLeft'}
      header={'header'}
      brand={{
        content: 'React-Template-Ts',
        collapsedContent: 'RTT11111111',
      }}
      menu={{
        defaultCollapsedItems: ['layout_test_menu_item'],
        collapsedTrigger: 'siderBottom',
        items: [
          { icon: <ApiOutlined />, path: 'api', label: 'API' },
          {
            icon: <AppstoreAddOutlined />,
            path: 'component',
            label: '组件',
            children: [
              { path: 'test', label: 'Test' },
              { path: 'captcha', label: 'CaptchaInput 验证码' },
              { path: 'icon', label: 'Icon 图标' },
              { path: 'layout', label: 'Layout 布局' },
            ],
          },
        ],
      }}
      content={<Outlet />}
      footer={'footer'}
    />
  )
}

export default GlobalLayout
