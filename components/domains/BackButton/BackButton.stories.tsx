import { Meta, Story } from '@storybook/react'
import BackButton, { Props } from '.'

export default {
  title: 'domains/BackButton',
  component: BackButton,
} as Meta

export const Default: Story<Props> = (args) => <BackButton {...args} />
Default.args = {}
