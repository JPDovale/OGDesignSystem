import React from 'react'

import type { StoryObj, Meta } from '@storybook/react'
import { Button, IButtonRootProps } from '@og-ui/react'
import { Share } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button.Root,
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
    children: <Button.Label>Compartilhar</Button.Label>,
  },
}

export const WhitIcon: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
  },
}

export const WhitIconActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    variant: 'active',
  },
}

export const WhitIconLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    align: 'left',
  },
}

export const WhitIconLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    align: 'right',
  },
}

export const WhitIconRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    disabled: true,
  },
}

export const WhitIconDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    wid: 'middle',
  },
}

export const WhitIconMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
      </>
    ),
    wid: 'hug',
  },
}

export const WhitIconHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
        <Button.Icon>
          <Share />
        </Button.Icon>
        <Button.Label>Compartilhar</Button.Label>
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
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
  },
}

export const OnlyIconActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
  },
}

export const OnlyIconLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'left',
  },
}

export const OnlyIconLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
    align: 'left',
  },
}

export const OnlyIconRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'right',
  },
}

export const OnlyIconRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
    align: 'right',
  },
}

export const OnlyIconDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    disabled: true,
  },
}

export const OnlyIconDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'left',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    align: 'right',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddle: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
  },
}

export const OnlyIconMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
    wid: 'middle',
  },
}

export const OnlyIconMiddleLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyIconMiddleLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyIconMiddleRight: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyIconMiddleRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyIconMiddleDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyIconMiddleDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyIconMiddleLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
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
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyIconMiddleRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
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
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'hug',
  },
}

export const OnlyIconHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    variant: 'active',
    wid: 'hug',
  },
}

export const OnlyIconHugDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyIconHugDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: (
      <Button.Icon>
        <Share />
      </Button.Icon>
    ),
    wid: 'hug',
    variant: 'active',
    disabled: true,
  },
}

export const OnlyLabel: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
  },
}

export const OnlyLabelActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    variant: 'active',
  },
}

export const OnlyLabelLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'left',
  },
}

export const OnlyLabelLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelRight: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'right',
  },
}

export const OnlyLabelRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    disabled: true,
  },
}

export const OnlyLabelDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddle: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
  },
}

export const OnlyLabelMiddleActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeft: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'left',
  },
}

export const OnlyLabelMiddleLeftActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'left',
    variant: 'active',
  },
}

export const OnlyLabelMiddleRight: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'right',
  },
}

export const OnlyLabelMiddleRightActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'right',
    variant: 'active',
  },
}

export const OnlyLabelMiddleDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    disabled: true,
  },
}

export const OnlyLabelMiddleDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleLeftDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'left',
    disabled: true,
  },
}

export const OnlyLabelMiddleLeftDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'left',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelMiddleRightDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'right',
    disabled: true,
  },
}

export const OnlyLabelMiddleRightDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'middle',
    align: 'right',
    disabled: true,
    variant: 'active',
  },
}

export const OnlyLabelHug: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'hug',
  },
}

export const OnlyLabelHugActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'hug',
    variant: 'active',
  },
}

export const OnlyLabelHugDisabled: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'hug',
    disabled: true,
  },
}

export const OnlyLabelHugDisabledActive: StoryObj<IButtonRootProps> = {
  args: {
    children: <Button.Label>Compartilhar</Button.Label>,
    wid: 'hug',
    disabled: true,
    variant: 'active',
  },
}
