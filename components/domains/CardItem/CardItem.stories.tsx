import { Meta, Story } from '@storybook/react'
import CardItem, { Props } from '.'

export default {
  title: 'domains/CardItem',
  component: CardItem,
} as Meta

export const Default: Story<Props> = (args) => <CardItem {...args} />
Default.args = {
  url: 'https://youtu.be/Xw_Xc50jY1E',
  label: 'えんぶり受賞',
}
