import React from 'react'

import { shadows } from '@og-ui/tokens'

export function ShadowsGrid() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        gap: '2rem',
        padding: '1rem',
        flexWrap: 'wrap',
      }}
    >
      {Object.entries(shadows).map(([key, shadow]) => {
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              alignItems: 'center',
              background: '#1f1f25',
              color: 'white',
              width: '22.6%',
              height: '8rem',
              borderRadius: '12px',
              boxShadow: shadow,
            }}
          >
            {key}
          </div>
        )
      })}
    </div>
  )
}
