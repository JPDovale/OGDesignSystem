import { ElementType, ComponentProps } from 'react'

import { styled } from '../styles'

export const Heading = styled('h2', {
  lineHeight: '$shorter',
  margin: 0,
  fontFamily: '$heading',
  color: '$base100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$3xl' },
      xl: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
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
    spacing: 'default',
    height: 'base',
    weight: 'regular',
  },
})

export interface IHeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
