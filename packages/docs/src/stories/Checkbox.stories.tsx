import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, ICheckboxProps, Text } from '@og-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    variant: {
      options: ['default', 'denied'],
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
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$3',
            boxShadow: 'none',
            background: '$gray900',
          }}
          as={'label'}
        >
          {Story()}
          <Text size={'xs'}>Aceitar termos de uso</Text>
        </Box>
      )
    },
  ],
} as Meta<ICheckboxProps>

export const Default: StoryObj<ICheckboxProps> = {}

export const Denied: StoryObj<ICheckboxProps> = {
  args: {
    variant: 'denied',
  },
}
