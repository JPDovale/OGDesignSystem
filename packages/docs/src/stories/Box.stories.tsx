import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Box, IBoxProps, Text } from '@og-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'Componente de caixa estilizado. Segue os padrões de ```display: flex``` podendo receber um ```children={}``` de qualquer elemento valido no HTML5',
      },
    },
  },
  args: {
    children: <Text>Testando o box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Qualquer elemento valido no HTML5',
      defaultValue: false,
    },
  },
} as Meta<IBoxProps>

export const Default: StoryObj<IBoxProps> = {}
