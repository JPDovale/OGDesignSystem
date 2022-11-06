import React, { ComponentProps } from 'react'
import { UserCircle } from 'phosphor-react'

import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface IAvatarImageProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: IAvatarImageProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <UserCircle />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
