import { Meta, Story } from '@storybook/react'
import Icon, { Props } from '.'
import React from 'react'

export default {
  title: 'bases/Icon',
  component: Icon,
} as Meta

export const Default: Story<Props> = (args) => <Icon {...args} />
Default.args = {
  type: 'Facebook',
}
