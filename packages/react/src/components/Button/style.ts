import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',

  padding: '$4 $4',

  background: '$purple600',
  color: '$white',
  border: 'none',
  outline: 'none',
  borderRadius: '$sm',
  transition: 'all 500ms',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  variants: {
    align: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
    wid: {
      full: {
        width: '100%',
      },
      hug: {
        width: 'max-content',
      },
      middle: {
        width: '50%',
      },
    },
    variant: {
      default: {
        '&:not(:disabled):not(:active):hover': {
          background: '$purple500',
        },

        '&:focus': {
          boxShadow: '$inFocus',
        },

        '&:not(:disabled):active': {
          boxShadow: '$onActive',
        },

        cursor: 'pointer',
        boxShadow: '$default',
      },
      active: {
        background: '$purple800',
        color: '$base500',
        boxShadow: '$onActive',
      },
    },
  },

  defaultVariants: {
    align: 'left',
    wid: 'full',
    variant: 'default',
  },
})
