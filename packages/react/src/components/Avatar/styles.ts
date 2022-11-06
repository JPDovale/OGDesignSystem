import * as Avatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$14',
  height: '$14',
  overflow: 'hidden',
  padding: '2px',
  background: 'linear-gradient(178deg, #230C40 0%, #133261 100%)',
  boxSizing: 'border-box',
  border: '1px solid $base600',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(178deg, #230C40 0%, #133261 100%)',
  color: '$base400',

  svg: {
    width: '$12',
    height: '$12',
  },
})
