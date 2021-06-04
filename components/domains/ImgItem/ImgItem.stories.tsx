import { Meta, Story } from '@storybook/react'
import ImgItem, { Props } from '.'

export default {
  title: 'domains/ImgItem',
  component: ImgItem,
} as Meta

export const Default: Story<Props> = (args) => <ImgItem {...args} />
Default.args = {
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/emotional-aomori.appspot.com/o/tokyo.jpg?alt=media&token=8cb537b0-cd5c-49dd-b938-21d0f0fe3729',
  label: 'えんぶり受賞',
}
