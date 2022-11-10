import { ElementType, ComponentProps } from 'react'

import { styled } from '../styles'

export const Text = styled('p', {
  lineHeight: '$base',
  margin: 0,
  color: '$base100',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
    },
    family: {
      body: { fontFamily: '$bodyText' },
      text: { fontFamily: '$text' },
    },
    spacing: {
      default: { letterSpacing: 'none' },
      minimus: { letterSpacing: '$minimum' },
      minus: { letterSpacing: '$minus' },
      medium: { letterSpacing: '$medium' },
      maximum: { letterSpacing: '$maximum' },
    },
    height: {
      shorter: { lineHeight: '$shorter' },
      short: { lineHeight: '$short' },
      base: { lineHeight: '$base' },
      tall: { lineHeight: '$tall' },
    },
    weight: {
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' },
    },
  },

  defaultVariants: {
    size: 'md',
    family: 'text',
    spacing: 'default',
    height: 'base',
    weight: 'regular',
  },
})

export interface ITextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
