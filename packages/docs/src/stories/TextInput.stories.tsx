import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, ITextInputProps, Box, Text } from '@og-ui/react'
import { Envelope, User } from 'phosphor-react'

export default {
  title: 'Form/ TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component:
          'Um campo para inserir texto. Por padrão o elemento renderizado é apenas o ```<TextInput />``` mas quando usado em conjunto com outros elementos, pode-se alcançar o elemento mostrado abaixo. <br/> <br/> Elementos usados: <br/> ```<Box />```: Usado para encapsular os elementos <br/> ```<Text />```: Usado envolta do input de texto como ```label``` <br /> ```<TextInput />```: Elemento principal',
      },
    },
  },
  args: {
    icon: <Envelope />,
    placeholder: 'Insira o seu nome',
    variant: 'default',
    disabled: false,
    prefix: undefined,
  },
  argTypes: {
    variant: {
      options: ['default', 'accepted', 'attention', 'denied'],
      control: {
        type: 'inline-radio',
      },
      description:
        'Todos os estados possíveis atribuídos ao input de texto. Exemplo: ```<TextInput variant="accepted" />```',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description:
        'O input de texto pode estar desabilitado através do parâmetro disabled nativo do HTML5',
    },
    icon: {
      control: {
        type: null,
      },
      description:
        'Elemento de ícone ao lado do input de texto. A propriedade é opcional, como mostrada a seguir.',
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'Parâmetro nativo do input de texto.',
    },
    prefix: {
      control: {
        type: 'text',
      },
      description:
        'Elemento de texto que precede oc campo de input de texto. A propriedade é opcional, como mostrada a seguir.',
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
  parameters: {
    docs: {
      description: {
        story: 'Input de texto sem o componente de ícone.',
      },
    },
  },
}

export const WithPrefix: StoryObj<ITextInputProps> = {
  args: {
    icon: undefined,
    prefix: 'user.log/',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de texto com o parâmetro de prefixo.',
      },
    },
  },
}

export const WithPrefixAndIcon: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    prefix: 'user.log/',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input de texto com o parâmetro de prefixo e componente de ícone.',
      },
    },
  },
}

export const Disable: StoryObj<ITextInputProps> = {
  args: {
    icon: undefined,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de texto desabilitado.',
      },
    },
  },
}

export const Accepted: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: 'Jon Doe',
    prefix: 'user.log/',
    variant: 'accepted',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Input de texto com valores aceitos ou em condizência com a finalidade do formulário.',
      },
    },
  },
}

export const InAlert: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: '',
    prefix: 'user.log/',
    variant: 'attention',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de texto com valores em alerta.',
      },
    },
  },
}

export const Denied: StoryObj<ITextInputProps> = {
  args: {
    icon: <User />,
    value: '{  }',
    prefix: 'user.log/',
    variant: 'denied',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input de texto com valores negados ou inválidos.',
      },
    },
  },
}
