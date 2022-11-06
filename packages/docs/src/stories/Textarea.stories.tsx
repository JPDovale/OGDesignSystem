import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Textarea, ITextAreaProps, Box, Text } from '@og-ui/react'

export default {
  title: 'Form/ Textarea',
  component: Textarea,
  args: {},
  argTypes: {
    variant: {
      options: ['default', 'accepted', 'attention', 'denied'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            flexDirection: 'column',
            gap: '$6',
            boxShadow: 'none',
            background: '$gray900',
          }}
        >
          <Text
            css={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '$2',
            }}
            as={'label'}
            size={'xs'}
          >
            Deixe sua mensagem {Story()}
          </Text>
        </Box>
      )
    },
  ],
} as Meta<ITextAreaProps>

export const Default: StoryObj<ITextAreaProps> = {}

export const Disable: StoryObj<ITextAreaProps> = {
  args: {
    disabled: true,
  },
}
export const Accepted: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'accepted',
  },
}

export const InAlert: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'attention',
  },
}

export const Denied: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'denied',
  },
}
