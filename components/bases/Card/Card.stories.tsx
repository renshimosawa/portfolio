import { Meta, Story } from '@storybook/react/types-6-0'

import Card, { Props } from '.'

export default {
  title: 'bases/Card',
  component: Card,
} as Meta

export const Default: Story<Props> = (args) => (
  <Card {...args}>
    <div style={{ width: 400, height: 400 }} />
  </Card>
)
Default.args = {
  style: { margin: 50, width: 400 },
}
