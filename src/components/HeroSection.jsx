import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  Card,
  useTheme,
  Stack,
  Divider,
} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DescriptionIcon from '@mui/icons-material/Description';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LayersIcon from '@mui/icons-material/Layers';
import { portfolioData } from '../data/portfolioData';
import { openInstallGuide } from '../store/mineAiSlice';

export default function HeroSection() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { developer } = portfolioData;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 11 },
        overflow: 'hidden',
        background:
          theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 40%)'
            : 'radial-gradient(circle at 10% 20%, rgba(2, 132, 199, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(79, 70, 229, 0.05) 0%, transparent 40%)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          {/* Left Column: Intro & Headlines */}
          <Grid size={{ xs: 12, lg: 6.8 }}>
            {/* Live Availability Badge */}
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.7,
                  borderRadius: '20px',
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <Box
                  className="badge-live-pulse"
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#10B981',
                  }}
                />
                <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 700, letterSpacing: 0.5 }}>
                  AVAILABLE FOR HIRE • SENIOR FLUTTER &amp; FULL-STACK
                </Typography>
              </Box>
            </Box>

            {/* Developer Headline */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.4rem', md: '3.8rem' },
                lineHeight: 1.15,
                mb: 2,
                fontWeight: 900,
              }}
            >
              Hi, I’m{' '}
              <Box component="span" className="gradient-text-cyan">
                {developer.name}
              </Box>
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                mb: 2,
              }}
            >
              {developer.title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: '1rem', md: '1.08rem' },
                lineHeight: 1.7,
                maxWidth: 680,
                mb: 4,
              }}
            >
              {developer.summary}
            </Typography>

            {/* Direct Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                onClick={() => scrollTo('mineai')}
                sx={{
                  py: 1.5,
                  px: 3.5,
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  boxShadow: '0 10px 25px rgba(56, 189, 248, 0.4)',
                }}
              >
                Explore MineAI Suite
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<AndroidIcon />}
                onClick={() => scrollTo('mineai-downloads')}
                sx={{
                  py: 1.5,
                  px: 3,
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.5)' : '#0284C7',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.1)' : 'rgba(2, 132, 199, 0.08)',
                  },
                }}
              >
                Download APK &amp; Desktop (.exe)
              </Button>

              <Button
                variant="text"
                size="large"
                startIcon={<DescriptionIcon />}
                onClick={() => scrollTo('resume')}
                sx={{
                  py: 1.5,
                  px: 2.5,
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                }}
              >
                View Resume
              </Button>
            </Stack>

            {/* Quick Contact & Social Pills */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Chip
                icon={<EmailIcon fontSize="small" />}
                label={developer.email}
                component="a"
                href={`mailto:${developer.email}`}
                clickable
                variant="outlined"
                sx={{ borderRadius: 2, borderColor: theme.palette.divider }}
              />
              <Chip
                icon={<PhoneIcon fontSize="small" />}
                label={developer.phone}
                component="a"
                href={`tel:${developer.phone}`}
                clickable
                variant="outlined"
                sx={{ borderRadius: 2, borderColor: theme.palette.divider }}
              />
              <Chip
                icon={<LinkedInIcon fontSize="small" />}
                label="LinkedIn Profile"
                component="a"
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 2 }}
              />
            </Box>
          </Grid>

          {/* Right Column: General About Me & MineAI Spotlight Card (NO BEN10, NO PRO) */}
          <Grid size={{ xs: 12, lg: 5.2 }}>
            <Card
              className="glow-card"
              sx={{
                p: { xs: 3, md: 3.5 },
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.9)' : '#FFFFFF',
                border: theme.palette.mode === 'dark' ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: 4.5,
                position: 'relative',
              }}
            >
              {/* Header: Developer Emblem & General Summary */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 18px rgba(56, 189, 248, 0.35)',
                  }}
                >
                  <TerminalIcon sx={{ color: '#FFFFFF', fontSize: 26 }} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                    About My Engineering
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>
                    Cross-Platform Architect • Mobile &amp; Desktop
                  </Typography>
                </Box>
              </Box>

              {/* General Core Strengths */}
              <Stack spacing={1.5} sx={{ mb: 3 }}>
                {developer.aboutHighlights.map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircleIcon sx={{ color: '#10B981', fontSize: 18, mt: 0.3 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.88rem', color: 'text.primary' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.5, display: 'block' }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              {/* Quick Metrics Strip */}
              <Grid container spacing={1.5} sx={{ mb: 3 }}>
                {developer.stats.map((stat, idx) => (
                  <Grid size={{ xs: 6 }} key={idx}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        backgroundColor:
                          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.65)' : 'rgba(241, 245, 249, 0.8)',
                        border: `1px solid ${theme.palette.divider}`,
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 900,
                          color: idx === 0 ? 'primary.main' : idx === 1 ? '#10B981' : '#818CF8',
                          fontSize: '1.4rem',
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.72rem' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* MineAI Flagship Spotlight Box inside the card */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  background:
                    theme.palette.mode === 'dark'
                      ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(37, 99, 235, 0.12) 100%)'
                      : 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 1.5,
                }}
              >
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'text.primary', display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <AutoAwesomeIcon sx={{ color: '#38BDF8', fontSize: 18 }} /> Flagship Project: MineAI
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Full-Stack AI Hub (Flutter + Node.js + Gemini)
                  </Typography>
                </Box>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => scrollTo('mineai')}
                  sx={{ borderRadius: 2, fontSize: '0.78rem', py: 0.7, px: 2, fontWeight: 700 }}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
