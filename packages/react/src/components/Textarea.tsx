import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Textarea = styled('textarea', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  padding: '$4',

  fontFamily: '$bodyText',
  fontSize: '$md',
  textAlign: 'justify',

  background: '$gray700',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  transition: 'all 500ms',
  border: 'none',
  outline: 'none',
  color: '$base100',
  resize: 'vertical',

  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      default: {
        boxShadow: '$default',
      },
      accepted: {
        boxShadow: '$accepted',
      },
      denied: {
        boxShadow: '$denied',
      },
      attention: {
        boxShadow: '$attention',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export interface ITextAreaProps extends ComponentProps<typeof Textarea> {
  variant?: 'accepted' | 'denied' | 'attention'
}

Textarea.displayName = 'Textarea'
