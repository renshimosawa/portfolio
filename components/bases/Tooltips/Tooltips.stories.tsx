import { Meta, Story } from '@storybook/react/types-6-0'
import Tooltips, { Props } from '.'

export default {
  title: 'bases/Tooltips',
  component: Tooltips,
} as Meta

export const Default: Story<Props> = (args) => <Tooltips {...args} />
Default.args = {
  label: 'メールアドレスをコピーしました',
}
