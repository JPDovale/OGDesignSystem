import React, { ReactNode, ComponentProps } from 'react'
import { Input, TextInputContainer, TextInputPrefix } from './style'

export interface ITextInputProps extends ComponentProps<typeof Input> {
  icon?: ReactNode
  prefix?: string
  variant?: 'default' | 'accepted' | 'denied' | 'attention'
}

export function TextInput({
  icon,
  prefix,
  variant,
  ...props
}: ITextInputProps) {
  return (
    <TextInputContainer variant={variant}>
      {!!icon && icon}
      {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
