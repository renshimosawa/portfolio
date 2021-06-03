import { Meta, Story } from '@storybook/react'
import VideoItem, { Props } from '.'

export default {
  title: 'domains/VideoItem',
  component: VideoItem,
} as Meta

export const Default: Story<Props> = (args) => <VideoItem {...args} />
Default.args = {
  url: 'https://www.youtube.com/embed/Xw_Xc50jY1E',
  label: 'えんぶりフォトコン2020特賞',
}
