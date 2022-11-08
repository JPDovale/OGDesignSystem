import type { StoryObj, Meta } from '@storybook/react'
import { Heading, IHeadingProps } from '@og-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Title',
    as: 'h2',
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de título ',
      },
    },
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanhos disponíveis para o componente',
    },
    children: {
      description: 'Valor atribuído ao componente',
    },
    as: {
      description: 'Parâmetro para controlar a tag de exibição do componente',
    },
  },
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: 'H1 heading.',
    as: 'h1',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente de cabeçalho `<Heading />` sempre será uma tag `h2`, mas isso pode ser alterado passando a propriedade `as` para o componente em questão.',
      },
    },
  },
}
