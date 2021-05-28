import { Meta, Story } from '@storybook/react'
import AppbarWhite, { Props } from '.'

export default {
  title: 'domains/AppbarWhite',
  component: AppbarWhite,
} as Meta

export const Default: Story<Props> = (args) => <AppbarWhite {...args} />
Default.args = {}
