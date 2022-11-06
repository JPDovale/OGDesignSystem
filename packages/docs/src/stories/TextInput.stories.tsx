import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, ITextInputProps, Box, Text } from '@og-ui/react'
import { Envelope, User } from 'phosphor-react'

export default {
  title: 'Form/ TextInput',
  component: TextInput,
  args: {
    icon: <Envelope />,
    placeholder: 'Insira o seu nome',
    variant: undefined,
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'accepted', 'attention', 'denied'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: null,
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
            Username {Story()}
          </Text>
        </Box>
      )
    },
  ],
} as Meta<ITextInputProps>

export const Default: StoryObj<ITextInputProps> = {}

export const WithoutIcon: StoryObj<ITextInputProps> = {
  args: {
    icon: undefined,
  },
}

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    icon: undefined,
    prefix: 'user.log/',
  },
}

export const WithPrefixAndIcon: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    prefix: 'user.log/',
  },
}

export const Disable: StoryObj<ITextInputProps> = {
  args: {
    icon: undefined,
    disabled: true,
  },
}

export const Accepted: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: 'Jon Doe',
    prefix: 'user.log/',
    variant: 'accepted',
  },
}

export const InAlert: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: '',
    prefix: 'user.log/',
    variant: 'attention',
  },
}

export const Denied: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: '{  }',
    prefix: 'user.log/',
    variant: 'denied',
  },
}
