import React, { ReactNode, ComponentProps, InputHTMLAttributes } from 'react'
import {
  Input,
  TextInputContainer,
  TextInputIconContainer,
  TextInputPrefixContainer,
} from './style'

// export interface ITextInputProps extends ComponentProps<typeof Input> {
//   icon?: ReactNode
//   prefix?: string
//   variant?: 'default' | 'accepted' | 'denied' | 'attention'
// }

export interface ITextInputRootProps
  extends ComponentProps<typeof TextInputContainer> {
  disabled?: boolean
  children?: ReactNode
  variant?: 'default' | 'accepted' | 'denied' | 'attention'
}

export function TextInputRoot(props: ITextInputRootProps) {
  return <TextInputContainer {...props} />
}

TextInputRoot.displayName = 'TextInput.Root'

export interface ITextInputPrefixProps
  extends ComponentProps<typeof TextInputPrefixContainer> {
  children?: ReactNode
}

export function TextInputPrefix(props: ITextInputPrefixProps) {
  return <TextInputPrefixContainer {...props} />
}

TextInputPrefix.displayName = 'TextInput.Prefix'

export interface ITextInputIconProps
  extends ComponentProps<typeof TextInputIconContainer> {
  children?: ReactNode
}

export function TextInputIcon(props: ITextInputIconProps) {
  return <TextInputIconContainer {...props} />
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ComponentProps<typeof Input> {}

export function TextInputInput(props: ITextInputInputProps) {
  return <Input {...props} />
}

TextInputInput.displayName = 'TextInput.Input'

// export function TextInput({
//   icon,
//   prefix,
//   variant,
//   ...props
// }: ITextInputProps) {
//   return (
//     <TextInputContainer variant={variant}>
//       {!!icon && icon}
//       {!!prefix && <TextInputPrefix>{prefix}</TextInputPrefix>}
//       <Input {...props} />
//     </TextInputContainer>
//   )
// }

// TextInput.displayName = 'TextInput'
