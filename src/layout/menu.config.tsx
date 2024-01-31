import { ApiOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import { IMenu } from '@hezebin/doraemon'

export const menuConfig: IMenu = {
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
}
