// app/theme.ts
import { Theme } from 'theme-ui'
import { deep } from '@theme-ui/presets'

const theme: Theme = {
  ...deep,
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  colors: {
    ...deep.colors,
    primary: '#ec3750',
    secondary: '#8492a6',
    accent: '#33d6a6',
    muted: '#1d2d3e',
    background: '#121217',
    text: '#ffffff',
    modes: {
      light: {
        text: '#1d2d3e',
        background: '#ffffff',
        primary: '#ec3750',
        secondary: '#5f6c80',
        muted: '#f0f4f8',
        accent: '#33d6a6',
      },
    },
  },
  styles: {
    ...deep.styles,
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      bg: 'background',
      color: 'text',
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'white',
      fontWeight: 'bold',
      py: 2,
      px: 3,
      borderRadius: 8,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        bg: 'primary',
        opacity: 0.8,
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
    secondary: {
      bg: 'transparent',
      color: 'primary',
      border: '2px solid',
      borderColor: 'primary',
      fontWeight: 'bold',
      py: 2,
      px: 3,
      borderRadius: 8,
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        bg: 'primary',
        color: 'white',
        transform: 'translateY(-2px)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      },
    },
    icon: {
      bg: 'transparent',
      p: 2,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        bg: 'muted',
        transform: 'translateY(-2px)',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
      mt: 4,
      mb: 3,
    },
    gradient: {
      backgroundImage: 'linear-gradient(90deg, #ec3750, #ff8c37)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block',
    },
  },
  cards: {
    primary: {
      padding: 3,
      borderRadius: 12,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.125)',
      bg: 'muted',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.125)',
      },
    },
    project: {
      padding: 3,
      borderRadius: 12,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.125)',
      bg: 'muted',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.125)',
      },
    },
  },
  layout: {
    container: {
      maxWidth: 1200,
      px: 3,
    },
  },
}

export default theme