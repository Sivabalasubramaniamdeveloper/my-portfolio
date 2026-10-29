import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ParkIcon from '@mui/icons-material/Park';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ExtensionIcon from '@mui/icons-material/Extension';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LaunchIcon from '@mui/icons-material/Launch';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

import { portfolioData } from '../data/portfolioData';
import { setProjectFilter } from '../store/portfolioSlice';

export default function ProjectsSection() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { otherProjects } = portfolioData;
  const projectFilter = useSelector((state) => state.portfolio.projectFilter);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'published', label: 'Play Store & App Store' },
    { id: 'desktop', label: 'Desktop (macOS/Win)' },
    { id: 'ai', label: 'AI & IoT' },
    { id: 'open-source', label: 'Open Source' },
  ];

  const filteredProjects = otherProjects.filter((p) => {
    if (projectFilter === 'all') return true;
    if (projectFilter === 'published')
      return p.platform.includes('Play Store') || p.platform.includes('App Store');
    if (projectFilter === 'desktop') return p.tech.includes('Flutter Desktop');
    if (projectFilter === 'ai') return p.tech.includes('RAG Vector Store') || p.tech.includes('IoT Sensors');
    if (projectFilter === 'open-source') return p.platform.includes('pub.dev');
    return true;
  });

  const getProjectIcon = (iconName) => {
    switch (iconName) {
      case 'AccountBalanceWallet':
        return <AccountBalanceWalletIcon sx={{ color: '#10B981', fontSize: 28 }} />;
      case 'DirectionsCar':
        return <DirectionsCarIcon sx={{ color: '#38BDF8', fontSize: 28 }} />;
      case 'MenuBook':
        return <MenuBookIcon sx={{ color: '#818CF8', fontSize: 28 }} />;
      case 'Park':
      case 'Eco':
        return <ParkIcon sx={{ color: '#34D399', fontSize: 28 }} />;
      case 'SmartToy':
        return <SmartToyIcon sx={{ color: '#F59E0B', fontSize: 28 }} />;
      case 'Extension':
        return <ExtensionIcon sx={{ color: '#EC4899', fontSize: 28 }} />;
      default:
        return <LaunchIcon sx={{ color: '#38BDF8', fontSize: 28 }} />;
    }
  };

  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: 6 }}>
          <Chip
            label="PRODUCTION TRACK RECORD"
            color="secondary"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2 }}>
            Featured Production &amp; Published Projects
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Beyond MineAI, I have architected and deployed enterprise and consumer solutions across Google Play Store, Apple App Store, and the pub.dev Dart package ecosystem.
          </Typography>

          {/* Filter Pills */}
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
            {filterTabs.map((tab) => (
              <Chip
                key={tab.id}
                label={tab.label}
                clickable
                onClick={() => dispatch(setProjectFilter(tab.id))}
                color={projectFilter === tab.id ? 'primary' : 'default'}
                variant={projectFilter === tab.id ? 'filled' : 'outlined'}
                sx={{
                  fontWeight: 700,
                  px: 1,
                  py: 2.2,
                  borderRadius: 3,
                  fontSize: '0.88rem',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Project Grid */}
        <Grid container spacing={3.5}>
          {filteredProjects.map((proj) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={proj.id}>
              <Card
                className="glow-card"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 3,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 4,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box>
                  {/* Top Bar with Icon & Status */}
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        backgroundColor:
                          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(241, 245, 249, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      {getProjectIcon(proj.icon)}
                    </Box>
                    <Chip
                      label={proj.status}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        backgroundColor:
                          proj.status === 'Published'
                            ? 'rgba(16, 185, 129, 0.15)'
                            : proj.status === 'Open Source'
                            ? 'rgba(236, 72, 153, 0.15)'
                            : 'rgba(56, 189, 248, 0.15)',
                        color:
                          proj.status === 'Published'
                            ? '#10B981'
                            : proj.status === 'Open Source'
                            ? '#EC4899'
                            : '#38BDF8',
                      }}
                    />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.8 }}>
                    {proj.name}
                  </Typography>

                  <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, display: 'block', mb: 1.5 }}>
                    📍 {proj.platform} • {proj.role}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2.5 }}>
                    {proj.summary}
                  </Typography>
                </Box>

                <Box>
                  {/* Metrics Badge */}
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor:
                        theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
                      border: `1px solid ${theme.palette.divider}`,
                      mb: 2,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <CheckCircleOutlinedIcon fontSize="small" sx={{ color: '#10B981' }} /> {proj.metrics}
                    </Typography>
                  </Box>

                  {/* Tech Tags */}
                  <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap', mb: 2.5 }}>
                    {proj.tech.map((t, i) => (
                      <Typography key={i} className="code-chip" sx={{ fontSize: '0.74rem' }}>
                        {t}
                      </Typography>
                    ))}
                  </Box>

                  {/* Store & Direct Action Buttons */}
                  <Box sx={{ pt: 1, borderTop: `1px solid ${theme.palette.divider}` }}>
                    {proj.hasPlayStore && (
                      <Button
                        component="a"
                        href={proj.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        fullWidth
                        startIcon={<ShopIcon sx={{ color: '#10B981' }} />}
                        endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                        sx={{
                          py: 0.9,
                          fontWeight: 700,
                          borderRadius: 2.5,
                          borderColor: 'rgba(16, 185, 129, 0.4)',
                          color: '#10B981',
                          '&:hover': {
                            borderColor: '#10B981',
                            backgroundColor: 'rgba(16, 185, 129, 0.08)',
                          },
                        }}
                      >
                        View on Google Play
                      </Button>
                    )}

                    {proj.hasPubDev && (
                      <Button
                        component="a"
                        href={proj.pubDevUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        fullWidth
                        startIcon={<ExtensionIcon sx={{ color: '#EC4899' }} />}
                        endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                        sx={{
                          py: 0.9,
                          fontWeight: 700,
                          borderRadius: 2.5,
                          borderColor: 'rgba(236, 72, 153, 0.4)',
                          color: '#EC4899',
                          '&:hover': {
                            borderColor: '#EC4899',
                            backgroundColor: 'rgba(236, 72, 153, 0.08)',
                          },
                        }}
                      >
                        View on pub.dev Package
                      </Button>
                    )}

                    {proj.hasAppStore && (
                      <Button
                        component="a"
                        href={proj.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        fullWidth
                        startIcon={<AppleIcon />}
                        endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                        sx={{
                          py: 0.9,
                          fontWeight: 700,
                          borderRadius: 2.5,
                          borderColor: theme.palette.divider,
                        }}
                      >
                        View on Mac App Store
                      </Button>
                    )}

                    {!proj.hasPlayStore && !proj.hasPubDev && !proj.hasAppStore && (
                      <Button
                        variant="outlined"
                        size="small"
                        fullWidth
                        disabled
                        sx={{
                          py: 0.9,
                          fontWeight: 600,
                          borderRadius: 2.5,
                        }}
                      >
                        Internal Production Architecture
                      </Button>
                    )}
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
