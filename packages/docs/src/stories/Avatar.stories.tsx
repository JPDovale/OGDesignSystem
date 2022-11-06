import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, IAvatarImageProps } from '@og-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/JPDovale.png',
    alt: 'João Paulo',
  },
} as Meta<IAvatarImageProps>

export const Default: StoryObj<IAvatarImageProps> = {}

export const WithFallback: StoryObj<IAvatarImageProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
}
