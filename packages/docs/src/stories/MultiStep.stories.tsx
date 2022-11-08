import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { MultiStep, IMultiStepProps, Box } from '@og-ui/react'

export default {
  title: 'Form/ Multi step',
  component: MultiStep,
  parameters: {
    docs: {
      description: {
        component:
          'Contador de passos. Por padrão o elemento renderizado é apenas o ```<MultiStep />``` mas quando usado em conjunto com outros elementos, pode-se alcançar o elemento mostrado abaixo. <br/> <br/> Elementos usados: <br/> ```<Box />```: Usado para encapsular os elementos <br/> ```<MultiStep />```: Elemento principal',
      },
    },
  },
  args: {
    size: 5,
    currentStep: 1,
  },
  argTypes: {
    size: {
      description:
        'Parâmetro usado para indicar a quantidade de passos existentes',
      defaultValue: 'Quantidade de passos',
    },
    currentStep: {
      description:
        'Parâmetro usado para indicar o passo sendo executado no momento da renderização',
      defaultValue: 'Quantidade de passos',
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
  parameters: {
    docs: {
      description: {
        story: 'Elemento renderizado quando todos os passos estão concluídos',
      },
    },
  },
}
