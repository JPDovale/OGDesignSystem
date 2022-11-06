import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Box, IBoxProps, Text } from '@og-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<IBoxProps>

export const Default: StoryObj<IBoxProps> = {}
