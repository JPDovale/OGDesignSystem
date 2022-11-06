import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { MultiStep, IMultiStepProps, Box } from '@og-ui/react'

export default {
  title: 'Form/ Multi step',
  component: MultiStep,
  args: {
    size: 5,
    currentStep: 1,
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
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<IMultiStepProps>

export const Default: StoryObj<IMultiStepProps> = {}

export const Full: StoryObj<IMultiStepProps> = {
  args: {
    currentStep: 5,
  },
}
