import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  useTheme,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const theme = useTheme();
  const { developer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor:
          theme.palette.mode === 'dark' ? '#070B14' : '#F1F5F9',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              {developer.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Senior Flutter &amp; Full-Stack Developer • Tirunelveli / Chennai, India
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href={`mailto:${developer.email}`}
              sx={{ color: 'text.secondary', border: `1px solid ${theme.palette.divider}` }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={developer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', border: `1px solid ${theme.palette.divider}` }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href={`tel:${developer.phone}`}
              sx={{ color: 'text.secondary', border: `1px solid ${theme.palette.divider}` }}
            >
              <PhoneIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={scrollToTop}
              color="primary"
              sx={{ border: `1px solid ${theme.palette.divider}` }}
            >
              <KeyboardArrowUpIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} {developer.name}. Built with React.js, Material UI &amp; Redux Toolkit.
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            MineAI Production Release v1.0.0 • APK &amp; Desktop Suite Available for Immediate Evaluation
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
