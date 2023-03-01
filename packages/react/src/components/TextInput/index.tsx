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

function TextInputRoot(props: ITextInputRootProps) {
  return <TextInputContainer {...props} />
}

TextInputRoot.displayName = 'TextInput.Root'

export interface ITextInputPrefixProps
  extends ComponentProps<typeof TextInputPrefixContainer> {
  children?: ReactNode
}

function TextInputPrefix(props: ITextInputPrefixProps) {
  return <TextInputPrefixContainer {...props} />
}

TextInputPrefix.displayName = 'TextInput.Prefix'

export interface ITextInputIconProps
  extends ComponentProps<typeof TextInputIconContainer> {
  children?: ReactNode
}

function TextInputIcon(props: ITextInputIconProps) {
  return <TextInputIconContainer {...props} />
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface ITextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: ITextInputInputProps) {
  return <Input {...props} />
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Prefix: TextInputPrefix,
  Icon: TextInputIcon,
}

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
