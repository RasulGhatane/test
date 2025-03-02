// app/components/Footer.tsx
'use client'

import { Box, Container, Grid, Link, Text } from 'theme-ui'

const Footer = () => {
  return (
    <Box as="footer" sx={{ bg: 'muted', py: 5, mt: 5 }}>
      <Container>
        <Grid gap={4} columns={[1, 2, 4]}>
          <Box>
            <Text sx={{ fontWeight: 'bold', mb: 3, fontSize: 3 }}>
              <Text as="span" sx={{ variant: 'text.gradient' }}>
                AI-Conic
              </Text>{' '}
              Club
            </Text>
            <Text sx={{ color: 'secondary', mb: 2 }}>
              Creating the future with AI, one project at a time.
            </Text>
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold', mb: 3 }}>Links</Text>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="/" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                Home
              </Link>
              <Link href="/about" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                About
              </Link>
              <Link href="/events" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                Events
              </Link>
              <Link href="/projects" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                Projects
              </Link>
            </Box>
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold', mb: 3 }}>Community</Text>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="/join" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                Join Us
              </Link>
              <Link href="https://github.com/ai-conic-club" target="_blank" rel="noopener noreferrer" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                GitHub
              </Link>
              <Link href="https://discord.gg/ai-conic" target="_blank" rel="noopener noreferrer" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                Discord
              </Link>
            </Box>
          </Box>
          <Box>
            <Text sx={{ fontWeight: 'bold', mb: 3 }}>Contact</Text>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link href="mailto:hello@ai-conic.club" sx={{ color: 'secondary', '&:hover': { color: 'primary' } }}>
                hello@ai-conic.club
              </Link>
              <Text sx={{ color: 'secondary' }}>
                University Campus,<br />
                Innovation Building, Room 42
              </Text>
            </Box>
          </Box>
        </Grid>
        <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid', borderColor: 'muted' }}>
          <Text sx={{ color: 'secondary', fontSize: 1, textAlign: 'center' }}>
            © {new Date().getFullYear()} AI-Conic Club. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer