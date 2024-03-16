import { createFromIconfontCN } from '@ant-design/icons'

/**
 * Example: <IconFont type="http" />
 */
interface IProps {
  type: string
}

export const IconFont = ({ type }: IProps) => {
  const typePrefix = 'icon-blog'

  const IconFont = createFromIconfontCN({
    scriptUrl: '/iconfont.js',
  })

  return <IconFont type={`${typePrefix}-${type}`} />
}

export default IconFont
