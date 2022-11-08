# @og-ui/react

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
