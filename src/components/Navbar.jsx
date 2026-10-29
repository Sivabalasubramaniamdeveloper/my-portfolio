import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  Chip,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DownloadIcon from '@mui/icons-material/Download';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import { toggleTheme } from '../store/themeSlice';
import { setActiveNavSection } from '../store/portfolioSlice';
import { openInstallGuide } from '../store/mineAiSlice';

const navItems = [
  { id: 'about', label: 'About Me' },
  { id: 'mineai', label: 'MineAI Suite (APK & EXE)', highlight: true },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const activeSection = useSelector((state) => state.portfolio.activeNavSection);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (id) => {
    dispatch(setActiveNavSection(id));
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(10, 15, 29, 0.85)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 74 } }}>
          {/* Logo / Brand */}
          <Box
            onClick={() => scrollToSection('home')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #38BDF8 0%, #2563EB 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(56, 189, 248, 0.4)',
              }}
            >
              <CodeIcon sx={{ color: '#FFFFFF', fontSize: 22 }} />
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  letterSpacing: '-0.02em',
                  color: theme.palette.text.primary,
                  lineHeight: 1.1,
                }}
              >
                Siva Bala Subramaniam
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                Flutter &amp; Full-Stack Engineer
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: isActive
                      ? 'primary.main'
                      : theme.palette.text.secondary,
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.88rem',
                    px: 1.5,
                    py: 0.8,
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.06)',
                    },
                  }}
                >
                  {item.label}
                  {item.highlight && (
                    <Chip
                      label="NEW"
                      size="small"
                      color="primary"
                      sx={{
                        ml: 1,
                        height: 18,
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        backgroundColor: '#38BDF8',
                        color: '#0B1120',
                      }}
                    />
                  )}
                </Button>
              );
            })}
          </Box>

          {/* Action Buttons: Theme Toggle & Quick Download */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} Mode`}>
              <IconButton
                onClick={() => dispatch(toggleTheme())}
                sx={{
                  color: theme.palette.text.primary,
                  border: `1px solid ${theme.palette.divider}`,
                  p: 1,
                  borderRadius: '10px',
                }}
              >
                {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
              </IconButton>
            </Tooltip>

            <Button
              variant="contained"
              size="medium"
              startIcon={<DownloadIcon />}
              onClick={() => scrollToSection('mineai-downloads')}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: '0.85rem',
                fontWeight: 700,
                px: 2.2,
                borderRadius: '10px',
              }}
            >
              Get MineAI App
            </Button>

            {/* Mobile Hamburger Toggle */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: theme.palette.background.paper,
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Navigation
          </Typography>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: 2,
                  backgroundColor: activeSection === item.id ? 'primary.main' : 'transparent',
                  color: activeSection === item.id ? '#FFFFFF' : 'text.primary',
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{ primary: { fontWeight: 600, fontSize: '0.95rem' } }}
                />
                {item.highlight && (
                  <Chip label="APK" size="small" color="primary" sx={{ height: 20, fontSize: '0.7rem' }} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<RocketLaunchIcon />}
              onClick={() => {
                scrollToSection('mineai');
                setMobileOpen(false);
              }}
            >
              Install MineAI (APK/EXE)
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
