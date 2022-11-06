import type { StoryObj, Meta } from '@storybook/react'
import { Text, ITextProps } from '@og-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    family: 'text',
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint provident, magni laborum eaque fugit architecto exercitationem necessitatibus labore officiis cumque dolor eligendi cupiditate animi recusandae tempore inventore excepturi! Aut, obcaecati.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    family: {
      options: ['bodyText', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
}

export const BodyText: StoryObj<ITextProps> = {
  args: {
    family: 'body',
  },
}
