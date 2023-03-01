import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import {
  IButtonRootProps,
  ButtonRoot,
  ButtonLabel,
  ButtonIcon,
} from '@og-ui/react'
import { Share } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: ButtonRoot,
  parameters: {
    docs: {
      description: {
        component: 'Componente de botão',
      },
    },
  },
  args: {
    align: 'center',
    disabled: false,
    wid: 'full',
    variant: 'default',
  },
  argTypes: {
    align: {
      options: ['left', 'center', 'right'],
      control: {
        type: 'inline-radio',
      },
      description: 'Alinhamento dos itens do botão (Opcional)',
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    wid: {
      options: ['hug', 'middle', 'full'],
      control: {
        type: 'inline-radio',
      },
      description: 'Tamanho do botão (Padrão: `Full`)',
    },
    variant: {
      options: ['default', 'active', 'noShadow'],
      control: {
        type: 'inline-radio',
      },
      description: 'Possíveis estados do botão ',
    },
  },
} as Meta<IButtonRootProps>

export const Default: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
  },
}

export const WhitIcon: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
  },
}

export const WhitIconActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    variant: 'active',
  },
}

export const WhitIconLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'left',
  },
}

export const WhitIconLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'left',
    variant: 'active',
  },
}

export const WhitIconRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'right',
  },
}

export const WhitIconRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'right',
    variant: 'active',
  },
}

export const WhitIconDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    disabled: true,
  },
}

export const WhitIconDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'left',
    disabled: true,
  },
}

export const WhitIconLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'left',
    variant: 'active',
    disabled: true,
  },
}

export const WhitIconRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'right',
    disabled: true,
  },
}
export const WhitIconRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    align: 'right',
    variant: 'active',
    disabled: true,
  },
}

export const WhitIconMiddle: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
  },
}

export const WhitIconMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    variant: 'active',
  },
}

export const WhitIconMiddleLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'left',
  },
}

export const WhitIconMiddleLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const WhitIconMiddleRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'right',
  },
}

export const WhitIconMiddleRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const WhitIconMiddleDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    disabled: true,
  },
}

export const WhitIconMiddleDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconMiddleLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const WhitIconMiddleLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconMiddleRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const WhitIconMiddleRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const WhitIconHug: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'hug',
  },
}

export const WhitIconHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'hug',
    variant: 'active',
  },
}

export const WhitIconHugDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'hug',
    disabled: true,
  },
}

export const WhitIconHugDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <ButtonIcon>
          <Share />
        </ButtonIcon>
        <ButtonLabel>Compartilhar</ButtonLabel>
      </>
    ),
    wid: 'hug',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIcon: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
  },
}

export const OnlyIconActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
  },
}

export const OnlyIconLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'left',
  },
}

export const OnlyIconLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
    align: 'left',
  },
}

export const OnlyIconRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'right',
  },
}

export const OnlyIconRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
    align: 'right',
  },
}

export const OnlyIconDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    disabled: true,
  },
}

export const OnlyIconDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'left',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    align: 'right',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddle: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
  },
}

export const OnlyIconMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
    wid: 'middle',
  },
}

export const OnlyIconMiddleLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyIconMiddleLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyIconMiddleRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyIconMiddleRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyIconMiddleDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyIconMiddleDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIconMiddleRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconMiddleRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyIconHug: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'hug',
  },
}

export const OnlyIconHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    variant: 'active',
    wid: 'hug',
  },
}

export const OnlyIconHugDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyIconHugDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <ButtonIcon>
        <Share />
      </ButtonIcon>
    ),
    wid: 'hug',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyLabel: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
  },
}

export const OnlyLabelActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    variant: 'active',
  },
}

export const OnlyLabelLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'left',
  },
}

export const OnlyLabelLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelRight: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'right',
  },
}

export const OnlyLabelRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    disabled: true,
  },
}

export const OnlyLabelDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddle: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
  },
}

export const OnlyLabelMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyLabelMiddleLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelMiddleRight: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyLabelMiddleRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelMiddleDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyLabelMiddleDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelMiddleLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelMiddleRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelHug: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'hug',
  },
}

export const OnlyLabelHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'hug',
    variant: 'active',
  },
}

export const OnlyLabelHugDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyLabelHugDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <ButtonLabel>Compartilhar</ButtonLabel>,
    wid: 'hug',
    disabled: true,
    variant: 'active',
  },
}
