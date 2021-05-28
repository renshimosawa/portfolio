import { Meta, Story } from '@storybook/react'
import TopBack, { Props } from '.'

export default {
  title: 'domains/TopBack',
  component: TopBack,
} as Meta

export const Default: Story<Props> = (args) => <TopBack {...args} />
Default.args = {}
