import { Meta, Story } from '@storybook/react'
import AppbarGray, { Props } from '.'

export default {
  title: 'domains/AppbarGray',
  component: AppbarGray,
} as Meta

export const Default: Story<Props> = (args) => <AppbarGray {...args} />
Default.args = {}
