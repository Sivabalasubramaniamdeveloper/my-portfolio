import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';

import { getAppTheme } from './theme/theme';
import './theme/customStyles.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MineAiShowcase from './components/MineAiShowcase';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import ReviewerNoticeSection from './components/ReviewerNoticeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import ScreenshotModal from './components/ScreenshotModal';
import InstallGuideModal from './components/InstallGuideModal';
import { hideToast } from './store/portfolioSlice';

export default function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  const toast = useSelector((state) => state.portfolio.toast);

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* Ambient Animated Glow Orbs in Background */}
        <Box
          className="ambient-orb"
          sx={{
            top: '8%',
            left: '-5%',
            width: 480,
            height: 480,
            background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)',
          }}
        />
        <Box
          className="ambient-orb"
          sx={{
            top: '40%',
            right: '-8%',
            width: 520,
            height: 520,
            background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)',
            animationDelay: '6s',
          }}
        />
        <Box
          className="ambient-orb"
          sx={{
            top: '75%',
            left: '10%',
            width: 420,
            height: 420,
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            animationDelay: '3s',
          }}
        />

        {/* 1. Sticky Navigation Header */}
        <Navbar />

        {/* 2. Hero Introduction & Bio */}
        <HeroSection />

        {/* 3. Flagship Showcase: MineAI (Real Screenshots Slider & APK / EXE Downloads) */}
        <MineAiShowcase />

        {/* 4. Other Production Projects (Play Store & App Store) */}
        <ProjectsSection />

        {/* 5. Technical Competencies & Skills Matrix */}
        <SkillsSection />

        {/* 6. Professional Experience Timeline & Education */}
        <ExperienceSection />

        {/* 7. Curriculum Vitae / Resume with Direct PDF Download */}
        <ResumeSection />

        {/* 8. Reviewer Guide & Play Store Verification Notice */}
        <ReviewerNoticeSection />

        {/* 9. Contact & Social Channels */}
        <ContactSection />

        {/* 10. Footer */}
        <Footer />

        {/* Modals & Dialogs */}
        <ScreenshotModal />
        <InstallGuideModal />

        {/* Global Toast Feedback */}
        <Snackbar
          open={toast.open}
          autoHideDuration={5000}
          onClose={() => dispatch(hideToast())}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => dispatch(hideToast())}
            severity={toast.severity}
            variant="filled"
            sx={{ width: '100%', borderRadius: 3, fontWeight: 600 }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
