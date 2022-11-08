import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, IAvatarImageProps } from '@og-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Componente de renderização de avatar ou foto de perfil do usuário',
      },
    },
  },
  args: {
    src: 'https://github.com/JPDovale.png',
    alt: 'João Paulo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
      description:
        'Define o caminho para a importação da imagem de avatar do usuário',
      defaultValue: 'https://exemple.com/user.png',
    },
    alt: {
      control: {
        type: 'text',
      },
      description:
        'Define um texto alternativo para padrões de acessibilidade e leitores de tela',
      defaultValue: 'Jon Doe',
    },
  },
} as Meta<IAvatarImageProps>

export const Default: StoryObj<IAvatarImageProps> = {}

export const WithFallback: StoryObj<IAvatarImageProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Em caso de ausência da propriedade ``` src ``` ou erro de algum tipo na renderização da imagem de avatar do usuário, o elemento exibido em tela será o seguinte:',
      },
    },
  },
}
