import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Chip,
  Alert,
  AlertTitle,
  useTheme,
  Stack,
} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import MicIcon from '@mui/icons-material/Mic';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import MovieIcon from '@mui/icons-material/Movie';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import SpeedIcon from '@mui/icons-material/Speed';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ComputerIcon from '@mui/icons-material/Computer';

import { portfolioData } from '../data/portfolioData';
import {
  setActiveFeatureId,
  openScreenshotModal,
  openInstallGuide,
} from '../store/mineAiSlice';
import { incrementDownload } from '../store/downloadSlice';
import { showToast } from '../store/portfolioSlice';
import ImageSlider from './ImageSlider';

export default function MineAiShowcase() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { mineAi } = portfolioData;

  const activeFeatureId = useSelector((state) => state.mineAi.activeFeatureId);
  const downloadStats = useSelector((state) => state.downloads.downloadStats);

  const activeFeature =
    mineAi.features.find((f) => f.id === activeFeatureId) || mineAi.features[0];

  const handleDownload = (type, fileName, url) => {
    dispatch(incrementDownload(type));
    dispatch(
      showToast({
        message: `Downloading ${fileName}... Installation instructions available below.`,
        severity: 'success',
      })
    );

    // Trigger browser download
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'Mic':
        return <MicIcon />;
      case 'ShoppingCart':
        return <ShoppingCartIcon />;
      case 'Dashboard':
        return <DashboardIcon />;
      case 'Newspaper':
        return <NewspaperIcon />;
      case 'Email':
        return <EmailIcon />;
      case 'AccountBalanceWallet':
        return <AccountBalanceWalletIcon />;
      case 'Lock':
        return <LockIcon />;
      case 'Movie':
        return <MovieIcon />;
      case 'ConfirmationNumber':
        return <ConfirmationNumberIcon />;
      case 'Computer':
        return <ComputerIcon />;
      default:
        return <SpeedIcon />;
    }
  };

  const handleZoom = (imgUrl, imgIndex) => {
    dispatch(
      openScreenshotModal({
        ...activeFeature,
        currentImage: imgUrl,
        imageIndex: imgIndex,
      })
    );
  };

  return (
    <Box
      id="mineai"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.6)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto', mb: 6 }}>
          <Chip
            label="FLAGSHIP FULL-STACK PRODUCT • MOBILE &amp; DESKTOP"
            color="primary"
            sx={{
              fontWeight: 800,
              fontSize: '0.8rem',
              py: 0.5,
              mb: 2,
              letterSpacing: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '2.2rem', sm: '3rem', md: '3.6rem' },
              mb: 2,
            }}
          >
            MineAI — Personal AI Productivity Hub
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              lineHeight: 1.6,
              mb: 3,
            }}
          >
            {mineAi.tagline}
          </Typography>

          {/* Transparent Play Store Verification Notice */}
          <Alert
            severity="info"
            variant="outlined"
            icon={<InfoIcon sx={{ color: '#38BDF8' }} />}
            sx={{
              textAlign: 'left',
              borderRadius: 3,
              borderColor: 'rgba(56, 189, 248, 0.4)',
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'rgba(56, 189, 248, 0.08)'
                  : 'rgba(56, 189, 248, 0.05)',
              mb: 4,
            }}
          >
            <AlertTitle sx={{ fontWeight: 800, color: 'text.primary', fontSize: '1rem' }}>
              📢 Notice for Recruiters &amp; Evaluators:
            </AlertTitle>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              Our Google Play Console developer identity verification is currently processing with Google. To enable immediate evaluation of our production code, direct installation packages for <strong>Android APK</strong> and <strong>Windows Desktop (.exe)</strong> are provided below with full installation instructions.
            </Typography>
          </Alert>
        </Box>

        {/* Action / Download Center (Only Android and Windows Desktop) */}
        <Box id="mineai-downloads" sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <DownloadIcon color="primary" /> Download &amp; Evaluate Production Binaries
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {/* Android APK Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                className="glow-card"
                sx={{
                  p: 3.5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.9)' : '#FFFFFF',
                  borderRadius: 4,
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        backgroundColor: 'rgba(56, 189, 248, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <AndroidIcon sx={{ color: '#38BDF8', fontSize: 32 }} />
                    </Box>
                    <Chip
                      label={mineAi.downloads.apk.highlight}
                      size="small"
                      color="primary"
                      sx={{ fontWeight: 800 }}
                    />
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    {mineAi.downloads.apk.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}>
                    Complete Android application with real-time speech recognition, multi-store scraping, and offline SQLite local database.
                  </Typography>

                  <Box sx={{ p: 2, borderRadius: 2.5, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)', mb: 3 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                      Package: <strong>{mineAi.downloads.apk.fileName}</strong>
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Size: <strong>{mineAi.downloads.apk.size}</strong> • Compatible: <strong>{mineAi.downloads.apk.requirements}</strong>
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={1.5}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<DownloadIcon />}
                    onClick={() =>
                      handleDownload(
                        'apk',
                        mineAi.downloads.apk.fileName,
                        mineAi.downloads.apk.url
                      )
                    }
                    sx={{ py: 1.5, fontWeight: 800, fontSize: '0.98rem' }}
                  >
                    Download Android APK ({mineAi.downloads.apk.size})
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<HelpOutlinedIcon />}
                    onClick={() => dispatch(openInstallGuide('android'))}
                    sx={{ fontSize: '0.82rem' }}
                  >
                    How to install on Android (Unknown sources guide)
                  </Button>
                </Stack>
              </Card>
            </Grid>

            {/* Windows Desktop (.exe) Card */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                className="glow-card"
                sx={{
                  p: 3.5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(17, 24, 39, 0.9)' : '#FFFFFF',
                  borderRadius: 4,
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        backgroundColor: 'rgba(99, 102, 241, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <DesktopWindowsIcon sx={{ color: '#818CF8', fontSize: 32 }} />
                    </Box>
                    <Chip
                      label={mineAi.downloads.exe.highlight}
                      size="small"
                      color="secondary"
                      sx={{ fontWeight: 800 }}
                    />
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    {mineAi.downloads.exe.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6 }}>
                    High-performance native Windows x64 executable featuring multi-window desktop orchestration and live Node.js microservice syncing.
                  </Typography>

                  <Box sx={{ p: 2, borderRadius: 2.5, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)', mb: 3 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                      Package: <strong>{mineAi.downloads.exe.fileName}</strong>
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      Size: <strong>{mineAi.downloads.exe.size}</strong> • Compatible: <strong>{mineAi.downloads.exe.requirements}</strong>
                    </Typography>
                  </Box>
                </Box>

                <Stack spacing={1.5}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    startIcon={<DownloadIcon />}
                    onClick={() =>
                      handleDownload(
                        'exe',
                        mineAi.downloads.exe.fileName,
                        mineAi.downloads.exe.url
                      )
                    }
                    sx={{ py: 1.5, fontWeight: 800, fontSize: '0.98rem' }}
                  >
                    Download Windows Setup (.exe)
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<HelpOutlinedIcon />}
                    onClick={() => dispatch(openInstallGuide('windows'))}
                    sx={{ fontSize: '0.82rem' }}
                  >
                    Windows SmartScreen installation guide
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Interactive Feature & Screenshot Showcase with Image Slider */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
            Application Modules &amp; Live UI Screenshots
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            Explore actual app screens captured from production builds. Features with multiple screens include interactive image sliders.
          </Typography>

          <Grid container spacing={4}>
            {/* Feature Selection Sidebar / Nav */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Stack spacing={1.5}>
                {mineAi.features.map((feature) => {
                  const isSelected = activeFeatureId === feature.id;
                  return (
                    <Card
                      key={feature.id}
                      onClick={() => dispatch(setActiveFeatureId(feature.id))}
                      sx={{
                        p: 2,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        border: isSelected
                          ? '2px solid #38BDF8'
                          : theme.palette.mode === 'dark'
                          ? '1px solid rgba(255, 255, 255, 0.08)'
                          : '1px solid rgba(0, 0, 0, 0.06)',
                        backgroundColor: isSelected
                          ? theme.palette.mode === 'dark'
                            ? 'rgba(56, 189, 248, 0.12)'
                            : 'rgba(2, 132, 199, 0.08)'
                          : theme.palette.background.paper,
                        transform: isSelected ? 'translateX(6px)' : 'none',
                        '&:hover': {
                          transform: 'translateX(6px)',
                          borderColor: '#38BDF8',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            backgroundColor: isSelected ? '#38BDF8' : 'rgba(148, 163, 184, 0.15)',
                            color: isSelected ? '#0B1120' : 'text.primary',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {getFeatureIcon(feature.icon)}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: isSelected ? 800 : 600,
                                color: isSelected ? 'primary.main' : 'text.primary',
                              }}
                            >
                              {feature.title}
                            </Typography>
                            {feature.images?.length > 1 && (
                              <Chip
                                label={`${feature.images.length} shots`}
                                size="small"
                                sx={{ height: 18, fontSize: '0.65rem', fontWeight: 700 }}
                              />
                            )}
                          </Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                              display: '-webkit-box',
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                            }}
                          >
                            {feature.shortDesc}
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  );
                })}
              </Stack>
            </Grid>

            {/* Active Feature Detail & Real Screenshot Slider */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Card
                sx={{
                  p: { xs: 2.5, md: 3.5 },
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Feature Header */}
                <Box sx={{ mb: 2.5 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {activeFeature.title}
                    </Typography>
                    <Chip
                      label={activeFeature.badge}
                      color="primary"
                      size="small"
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
                    {activeFeature.longDesc}
                  </Typography>

                  {/* Key Metrics Chips */}
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {activeFeature.keyMetrics.map((metric, i) => (
                      <Chip
                        key={i}
                        icon={<CheckCircleOutlinedIcon fontSize="small" sx={{ color: '#10B981 !important' }} />}
                        label={metric}
                        size="small"
                        sx={{
                          borderRadius: 2,
                          backgroundColor:
                            theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)',
                          color: theme.palette.mode === 'dark' ? '#34D399' : '#059669',
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Screenshot Slider Rendering */}
                <Box sx={{ my: 1, width: '100%' }}>
                  <ImageSlider
                    images={activeFeature.images}
                    title={activeFeature.title}
                    isDesktop={activeFeature.isDesktop}
                    onZoom={handleZoom}
                  />
                </Box>

                {/* Tags and Inspection Footer */}
                <Box sx={{ mt: 3, pt: 2, borderTop: `1px solid ${theme.palette.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {activeFeature.tags.map((tag, idx) => (
                      <Typography key={idx} className="code-chip">
                        #{tag}
                      </Typography>
                    ))}
                  </Box>

                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<ZoomInIcon />}
                    onClick={() => handleZoom(activeFeature.images[0], 0)}
                    sx={{ borderRadius: 2 }}
                  >
                    Enlarge Screenshot
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Architecture & Tech Stack Details */}
        <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
            Engineering Architecture: Flutter Client + Node.js Express 5.2 Microservices
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
            MineAI is designed with scalable clean architecture. The Flutter client implements the{' '}
            <strong>BLoC (Business Logic Component) / Cubit</strong> pattern, guaranteeing predictable,
            testable unidirectional data flow. The client talks via <code>dio</code> with Alice HTTP logging
            to an Express 5.2 Node.js backend which coordinates web scraping workers (Cheerio/Playwright)
            and Generative AI endpoints (Gemini 2.5 Flash).
          </Typography>

          <Grid container spacing={2}>
            {mineAi.techStack.map((tech, index) => (
              <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
                <Box
                  sx={{
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    borderRadius: 2.5,
                    backgroundColor:
                      theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.7)',
                    border: `1px solid ${theme.palette.divider}`,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '0.88rem' }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.74rem' }}>
                    {tech.category}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
