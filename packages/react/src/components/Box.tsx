import { ElementType, ComponentProps } from 'react'

import { styled } from '../styles'

export const Box = styled('div', {
  display: 'flex',

  padding: '$6',

  background: '$gray700',
  boxShadow: '$default',
  borderRadius: '$sm',
})

export interface IBoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
