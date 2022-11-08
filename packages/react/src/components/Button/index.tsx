import React, { ComponentProps, ReactNode } from 'react'

import { ButtonContainer } from './style'

export interface IButtonProps extends ComponentProps<typeof ButtonContainer> {
  icon?: ReactNode
  label?: string
  variant?: 'default' | 'active'
  wid?: 'full' | 'middle' | 'hug'
  align?: 'left' | 'center' | 'right'
}

export function Button(props: IButtonProps) {
  const { label, icon } = props

  return (
    <ButtonContainer {...props}>
      {!!icon && icon}
      {label}
    </ButtonContainer>
  )
}
