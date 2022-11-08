import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, ICheckboxProps, Text } from '@og-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Uma caixa de check. Por padrão o elemento renderizado é apenas o checkbox, mas quando usado em conjunto com outros elementos, pode-se alcançar o elemento mostrado abaixo. <br/> <br/> Elementos usados: <br/> ```<Box />```: Usado para encapsular os elementos <br/> ```<Checkbox />```: Elemento principal <br/> ```<Text />```: Usado para referir-se a finalidade da caixa de check. <br/>',
      },
    },
  },
  args: {},
  argTypes: {
    variant: {
      options: ['default', 'denied'],
      control: {
        type: 'inline-radio',
      },
      description: 'Define a variação do componente',
      defaultValue: 'default',
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
  parameters: {
    docs: {
      description: {
        story:
          'Em caso de erro o componente recebe uma sombra avermelhada para sinalizar o erro em questão',
      },
    },
  },
}
