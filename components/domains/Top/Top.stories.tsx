import { Meta, Story } from '@storybook/react'
import Top, { Props } from '.'

export default {
  title: 'domains/Top',
  component: Top,
} as Meta

export const Default: Story<Props> = (args) => <Top {...args} />
Default.args = {}
