# @og-ui/react

## 1.4.2

### Patch Changes

- Change exports types

## 1.4.1

### Patch Changes

- Add definitions types

## 1.4.0

### Minor Changes

- Refatory components

## 1.3.0

### Minor Changes

- 86b0de44: reexport stchies

## 1.2.0

### Minor Changes

- # Novas propriedades para componentes

  ***

  Novas propriedades para os componentes `<Heading />` e `<Text />`

  As novas propriedades adicionadas são usadas para definição de espaçamento de letras, peso da fonte e altura das linhas

## 1.1.0

### Minor Changes

- ## Add new component

  ***

  ###### Add new basic component `<Button />`

  Adicionamos um componente básico de botão, com muitas variações, podendo receber um ícone svg, label, entre outras propriedades.

  | Propriedade | Descrição                                                                                                                             | Sintax                         | Opções                            | Valor padrão | Opcional |
  | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------- | ------------ | -------- |
  | Icon        | Um ícone em svg da preferencia do usuário                                                                                             | `<Button icon={icon} />`       | Svg                               | undefined    | `true`   |
  | Label       | Texto principal do botão                                                                                                              | `<Button label={label} />`     | string                            | undefined    | `true`   |
  | Variant     | Propriedade que define as variantes disponíveis do botão                                                                              | `<Button variant={variant} />` | 'default' <br> 'active'           | 'default'    | `true`   |
  | Wid         | Essa propriedade define a largura do botão                                                                                            | `<Button wid={wid} />`         | 'full' <br>'middle' <br>'hug'     | 'full'       | `true`   |
  | Align       | Propriedade que define o alinhamento dos itens dentro do botão (Não funcional para caso de definição da propriedade `wid` como `hug`) | `<Button align={align} />`     | 'left' <br> 'center' <br> 'right' | 'left'       | `true`   |

  ***

  #### _Mais disponível na documentação_

## 1.0.0

### Major Changes

- Add all features
