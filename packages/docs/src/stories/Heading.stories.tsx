import React from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import { Heading, IHeadingProps } from '@og-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    spacing: 'default',
    height: 'base',
    weight: 'regular',
    children: 'Title',
    asChild: false,
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
    spacing: {
      options: ['default', 'minimus', 'minus', 'medium', 'maximum'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanhos disponíveis para o componente',
    },
    height: {
      options: ['shorter', 'short', 'base', 'tall'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanhos disponíveis para o componente',
    },
    weight: {
      options: ['regular', 'medium', 'bold'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanhos disponíveis para o componente',
    },
    children: {
      description: 'Valor atribuído ao componente',
    },
    asChild: {
      description: 'Parâmetro para controlar a tag de exibição do componente',
    },
  },
} as Meta<IHeadingProps>

export const Default: StoryObj<IHeadingProps> = {}

export const CustomTag: StoryObj<IHeadingProps> = {
  args: {
    children: <h1>H1 heading.</h1>,
    asChild: true,
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
