import { Meta, Story } from '@storybook/react'
import Catch, { Props } from '.'

export default {
  title: 'domains/Catch',
  component: Catch,
} as Meta

export const Default: Story<Props> = (args) => <Catch {...args} />
Default.args = {}
