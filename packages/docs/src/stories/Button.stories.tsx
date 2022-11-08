import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Button, IButtonProps } from '@og-ui/react'
import { Share } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Componente de botão',
      },
    },
  },
  args: {
    icon: null,
    label: 'Enviar',
    align: 'center',
    disabled: false,
    wid: 'full',
    variant: 'default',
  },
  argTypes: {
    icon: {
      control: {
        type: null,
      },
      description: 'Ícone do botão (Opcional)',
    },
    label: {
      description: 'Texto do botão (Opcional)',
    },
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
      description: 'Alinhamento dos itens do botão (Opcional)',
    },
    wid: {
      options: ['hug', 'middle', 'full'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanho do botão (Padrão: `Full`)',
    },
    variant: {
      options: ['default', 'active'],
      control: {
        type: 'inline-radio',
      },
      description: 'Possíveis estados do botão ',
    },
  },
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = {}

export const WhitIcon: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
  },
}

export const WhitIconActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    variant: 'active',
  },
}

export const WhitIconLeft: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'left',
  },
}

export const WhitIconLeftActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'left',
    variant: 'active',
  },
}

export const WhitIconRight: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'right',
  },
}

export const WhitIconRightActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'right',
    variant: 'active',
  },
}

export const WhitIconDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    disabled: true,
  },
}

export const WhitIconDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'left',
    disabled: true,
  },
}

export const WhitIconLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'left',
    variant: 'active',
    disabled: true,
  },
}

export const WhitIconRightDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'right',
    disabled: true,
  },
}
export const WhitIconRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    align: 'right',
    variant: 'active',
    disabled: true,
  },
}

export const WhitIconMiddle: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
  },
}

export const WhitIconMiddleActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    variant: 'active',
  },
}

export const WhitIconMiddleLeft: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
  },
}

export const WhitIconMiddleLeftActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const WhitIconMiddleRight: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
  },
}

export const WhitIconMiddleRightActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const WhitIconMiddleDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    disabled: true,
  },
}

export const WhitIconMiddleDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconMiddleLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const WhitIconMiddleLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconMiddleRightDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const WhitIconMiddleRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconHug: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'hug',
  },
}

export const WhitIconHugActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'hug',
    variant: 'active',
  },
}

export const WhitIconHugDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'hug',
    disabled: true,
  },
}

export const WhitIconHugDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: 'Compartilhar',
    wid: 'hug',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIcon: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
  },
}

export const OnlyIconActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    variant: 'active',
    label: '',
  },
}

export const OnlyIconLeft: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'left',
  },
}

export const OnlyIconLeftActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    variant: 'active',
    align: 'left',
  },
}

export const OnlyIconRight: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'right',
  },
}

export const OnlyIconRightActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    variant: 'active',
    align: 'right',
  },
}

export const OnlyIconDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    disabled: true,
  },
}

export const OnlyIconDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'left',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconRightDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    align: 'right',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddle: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
  },
}

export const OnlyIconMiddleActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    variant: 'active',
    wid: 'middle',
  },
}

export const OnlyIconMiddleLeft: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyIconMiddleLeftActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyIconMiddleRight: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyIconMiddleRightActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyIconMiddleDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyIconMiddleDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIconMiddleRightDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconMiddleRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIconHug: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'hug',
  },
}

export const OnlyIconHugActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    variant: 'active',
    wid: 'hug',
  },
}

export const OnlyIconHugDisabled: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyIconHugDisabledActive: StoryObj<IButtonProps> = {
  args: {
    icon: <Share />,
    label: '',
    wid: 'hug',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyLabel: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
  },
}

export const OnlyLabelActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    variant: 'active',
  },
}

export const OnlyLabelLeft: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'left',
  },
}

export const OnlyLabelLeftActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelRight: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'right',
  },
}

export const OnlyLabelRightActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    disabled: true,
  },
}

export const OnlyLabelDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelRightDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddle: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
  },
}

export const OnlyLabelMiddleActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeft: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyLabelMiddleLeftActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelMiddleRight: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyLabelMiddleRightActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelMiddleDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyLabelMiddleDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeftDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelMiddleLeftDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleRightDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelMiddleRightDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelHug: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'hug',
  },
}

export const OnlyLabelHugActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'hug',
    variant: 'active',
  },
}

export const OnlyLabelHugDisabled: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyLabelHugDisabledActive: StoryObj<IButtonProps> = {
  args: {
    label: 'Compartilhar',
    wid: 'hug',
    disabled: true,
    variant: 'active',
  },
}
