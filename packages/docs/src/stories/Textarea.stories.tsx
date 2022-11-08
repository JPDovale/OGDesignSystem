import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Textarea, ITextAreaProps, Box, Text } from '@og-ui/react'

export default {
  title: 'Form/ Textarea',
  component: Textarea,
  args: {
    disabled: false,
    variant: 'default',
    placeholder: 'Deixa a sua mensagem',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Um area para inserir texto. Por padrão o elemento renderizado é apenas o ```<Textarea />``` mas quando usado em conjunto com outros elementos, pode-se alcançar o elemento mostrado abaixo. <br/> <br/> Elementos usados: <br/> ```<Box />```: Usado para encapsular os elementos <br/> ```<Text />```: Usado envolta da area de texto como ```label``` <br /> ```<Textarea />```: Elemento principal',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'accepted', 'attention', 'denied'],
      control: {
        type: 'inline-radio',
      },
      description:
        'Todos os estados possíveis atribuídos a area de texto. Exemplo: ```<Textarea variant="accepted" />```',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description:
        'A area de texto pode estar desabilitado através do parâmetro disabled nativo do HTML5',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Parâmetro nativo do area de texto.',
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
  parameters: {
    docs: {
      description: {
        story: 'Area de texto desabilitada.',
      },
    },
  },
}
export const Accepted: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'accepted',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Area de texto com valores aceitos ou em condizência com a finalidade do formulário.',
      },
    },
  },
}

export const InAlert: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'attention',
  },
  parameters: {
    docs: {
      description: {
        story: 'Area de texto com valores em alerta.',
      },
    },
  },
}

export const Denied: StoryObj<ITextAreaProps> = {
  args: {
    variant: 'denied',
  },
  parameters: {
    docs: {
      description: {
        story: 'Area de texto com valores negados ou inválidos.',
      },
    },
  },
}
