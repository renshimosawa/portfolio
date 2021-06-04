import { Meta, Story } from '@storybook/react'
import IconCompo, { Props } from '.'

export default {
  title: 'bases/IconCompo',
  component: IconCompo,
} as Meta

export const Default: Story<Props> = (args) => <IconCompo {...args} />
Default.args = {
  type: 'facebook',
}
