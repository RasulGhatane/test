// app/components/ThemeProvider.tsx
'use client'

import { ReactNode, useState, useEffect } from 'react'
import { ThemeProvider as ThemeUIProvider, useColorMode } from 'theme-ui'
import theme from '../theme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Fix for SSR hydration mismatch
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeUIProvider theme={theme}>
      {mounted && children}
    </ThemeUIProvider>
  )
}

export const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode()
  
  return (
    <button
      onClick={() => setColorMode(colorMode === 'default' ? 'light' : 'default')}
      aria-label="Toggle dark mode"
      sx={{
        bg: 'transparent',
        color: 'text',
        p: 2,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          bg: 'muted',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {colorMode === 'default' ? '☀️' : '🌙'}
    </button>
  )
}