import React, { ComponentProps, ElementType, ReactNode } from 'react'

import {
  ButtonContainer,
  ButtonIconContainer,
  ButtonLabelContainer,
} from './style'

export interface IButtonRootProps
  extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
  variant?: 'default' | 'active' | 'noShadow'
  wid?: 'full' | 'middle' | 'hug'
  align?: 'left' | 'center' | 'right'
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}

export function ButtonRoot(props: IButtonRootProps) {
  return <ButtonContainer {...props} />
}

ButtonRoot.displayName = 'Button.Root'

export interface IButtonIconProps
  extends ComponentProps<typeof ButtonIconContainer> {
  children: ReactNode
}

export function ButtonIcon(props: IButtonIconProps) {
  return <ButtonIconContainer {...props} />
}

ButtonIcon.displayName = 'Button.Icon'

export interface IButtonLabelProps
  extends ComponentProps<typeof ButtonLabelContainer> {
  children: ReactNode
}

export function ButtonLabel(props: IButtonLabelProps) {
  return <ButtonLabelContainer {...props} />
}

ButtonLabel.displayName = 'Button.Label'

// export interface IButtonProps extends ComponentProps<typeof ButtonContainer> {
//   icon?: ReactNode
//   label?: string
//   variant?: 'default' | 'active'
//   wid?: 'full' | 'middle' | 'hug'
//   align?: 'left' | 'center' | 'right'
// }

// export function Button(props: IButtonProps) {
//   const { label, icon } = props

//   return (
//     <ButtonContainer {...props}>
//       {!!icon && icon}
//       {label}
//     </ButtonContainer>
//   )
// }
