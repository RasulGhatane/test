// app/components/Header.tsx
'use client'

import { Box, Flex, NavLink, Container, Button } from 'theme-ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from './ThemeProvider'

const Logo = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          fontSize: [3, 4],
          fontWeight: 'bold',
          letterSpacing: '-0.02em',
        }}
      >
        <Box as="span" sx={{ variant: 'text.gradient' }}>
          AI-Conic
        </Box>{' '}
        Club
      </Box>
    </Box>
  )
}

const Header = () => {
  const pathname = usePathname()
  
  return (
    <Box as="header" sx={{ bg: 'muted', py: 3, position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container>
        <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Box sx={{ cursor: 'pointer' }}>
              <Logo />
            </Box>
          </Link>
          
          <Flex as="nav" sx={{ gap: [2, 3, 4], alignItems: 'center', display: ['none', 'flex'] }}>
            <Link href="/" passHref>
              <NavLink sx={{ 
                fontWeight: 'bold', 
                borderBottom: pathname === '/' ? '2px solid' : 'none',
                borderColor: 'primary',
                pb: 1
              }}>
                Home
              </NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink sx={{ 
                fontWeight: 'bold',
                borderBottom: pathname === '/about' ? '2px solid' : 'none',
                borderColor: 'primary',
                pb: 1
              }}>
                About
              </NavLink>
            </Link>
            <Link href="/events" passHref>
              <NavLink sx={{ 
                fontWeight: 'bold',
                borderBottom: pathname === '/events' ? '2px solid' : 'none',
                borderColor: 'primary',
                pb: 1
              }}>
                Events
              </NavLink>
            </Link>
            <Link href="/projects" passHref>
              <NavLink sx={{ 
                fontWeight: 'bold',
                borderBottom: pathname === '/projects' ? '2px solid' : 'none',
                borderColor: 'primary',
                pb: 1
              }}>
                Projects
              </NavLink>
            </Link>
            
            <Flex sx={{ gap: 2, alignItems: 'center' }}>
              <Link href="https://github.com/Aiconic-Club" target="_blank" rel="noopener noreferrer">
                <Button variant="icon" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </Button>
              </Link>
              <Link href="https://discord.gg/" target="_blank" rel="noopener noreferrer">
                <Button variant="icon" aria-label="Discord">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 9a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v7.5a2.5 2.5 0 0 0 2.5 2.5H8l1 2h4l1-2h1.5a2.5 2.5 0 0 0 2.5-2.5V9z"></path>
                    <path d="M10 10h.01M14 10h.01"></path>
                  </svg>
                </Button>
              </Link>
              <DarkModeToggle />
            </Flex>
            
            <Link href="/join" passHref>
              <Button 
                sx={{ 
                  bg: 'primary', 
                  px: 3, 
                  py: 2, 
                  borderRadius: 8,
                  '&:hover': {
                    bg: 'primary',
                    opacity: 0.8,
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Join Us
              </Button>
            </Link>
          </Flex>
          
          {/* Mobile menu button */}
          <Button 
            variant="icon" 
            sx={{ display: ['flex', 'none'] }}
            aria-label="Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header