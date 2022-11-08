import type { StoryObj, Meta } from '@storybook/react'
import { Text, ITextProps } from '@og-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    family: 'text',
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint provident, magni laborum eaque fugit architecto exercitationem necessitatibus labore officiis cumque dolor eligendi cupiditate animi recusandae tempore inventore excepturi! Aut, obcaecati.',
    as: 'p',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
      ],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanhos disponíveis para o componente',
    },
    family: {
      options: ['bodyText', 'text'],
      control: {
        type: 'inline-radio',
      },
      description: 'Famílias de fontes disponíveis para o componente',
    },
    children: {
      description: 'Valor atribuído ao componente',
    },
    as: {
      description: 'Parâmetro para controlar a tag de exibição do componente',
    },
  },
} as Meta<ITextProps>

export const Default: StoryObj<ITextProps> = {}

export const CustomTag: StoryObj<ITextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente de cabeçalho `<Text />` sempre será uma tag `p`, mas isso pode ser alterado passando a propriedade `as` para o componente em questão.',
      },
    },
  },
}

export const BodyText: StoryObj<ITextProps> = {
  args: {
    family: 'body',
  },
  parameters: {
    docs: {
      description: {
        story: 'Texto com outra familia de texto',
      },
    },
  },
}
