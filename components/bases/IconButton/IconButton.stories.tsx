import { Meta, Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import IconButton, { Props } from '.'

export default {
  title: 'bases/IconButton',
  component: IconButton,
} as Meta

export const Default: Story<Props> = (args) => <IconButton {...args} />
Default.args = {
  onClick: action('onOressed'),
  type: 'facebook',
}
