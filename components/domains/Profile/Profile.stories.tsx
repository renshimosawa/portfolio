import { Meta, Story } from '@storybook/react'
import Profile, { Props } from '.'

export default {
  title: 'domains/Profile',
  component: Profile,
} as Meta

export const Default: Story<Props> = (args) => <Profile {...args} />
Default.args = {}
