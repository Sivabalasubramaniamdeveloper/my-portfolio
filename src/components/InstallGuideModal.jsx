import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  Button,
  Tabs,
  Tab,
  Alert,
  useTheme,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AndroidIcon from '@mui/icons-material/Android';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import { closeInstallGuide, openInstallGuide } from '../store/mineAiSlice';
import { portfolioData } from '../data/portfolioData';

export default function InstallGuideModal() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isInstallGuideOpen, selectedInstallPlatform } = useSelector((state) => state.mineAi);
  const { downloads } = portfolioData.mineAi;

  const currentTab = selectedInstallPlatform === 'windows' ? 'windows' : 'android';

  const handleTabChange = (event, newValue) => {
    dispatch(openInstallGuide(newValue));
  };

  return (
    <Dialog
      open={isInstallGuideOpen}
      onClose={() => dispatch(closeInstallGuide())}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 4,
          backgroundColor: theme.palette.mode === 'dark' ? '#0B1120' : '#FFFFFF',
          backgroundImage: 'none',
          border: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          📦 Reviewer Installation Instructions
        </Typography>
        <IconButton onClick={() => dispatch(closeInstallGuide())} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          sx={{ mb: 3, borderBottom: `1px solid ${theme.palette.divider}` }}
        >
          <Tab icon={<AndroidIcon />} iconPosition="start" label="Android APK" value="android" sx={{ fontWeight: 700 }} />
          <Tab icon={<DesktopWindowsIcon />} iconPosition="start" label="Windows Desktop (.exe)" value="windows" sx={{ fontWeight: 700 }} />
        </Tabs>

        {/* Android Tab Content */}
        {currentTab === 'android' && (
          <Box>
            <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
              <strong>Universal Android Release APK v1.0.0</strong> compiled with Android 8.0+ (API 26) through Android 15 compatibility.
            </Alert>

            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
              Step-by-Step Android Installation:
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 1:</strong> Download the file <code>MineAI-v1.0.0-release.apk</code> directly from this website to your Android device or computer.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 2:</strong> When prompted by Chrome / Android, allow <em>"Download anyway"</em>.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 3:</strong> Open your device <strong>Settings → Security &amp; Privacy → Install Unknown Apps</strong>, and toggle <em>Allow from this source</em> for your browser or Files app.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="primary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 4:</strong> Tap the downloaded APK to install. Grant Microphone permission for AI Voice Task transcription when opening the app.
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={downloads.apk.url}
              download={downloads.apk.fileName}
              sx={{ fontWeight: 700 }}
            >
              Download Android APK ({downloads.apk.size})
            </Button>
          </Box>
        )}

        {/* Windows Tab Content */}
        {currentTab === 'windows' && (
          <Box>
            <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
              <strong>Windows x64 Executable</strong> engineered with Flutter Desktop and Microsoft Visual C++ Runtime.
            </Alert>

            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 1 }}>
              Step-by-Step Windows Installation:
            </Typography>

            <Stack spacing={2} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="secondary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 1:</strong> Download <code>MineAI-Desktop-Windows-v1.0.0.exe</code>.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="secondary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 2:</strong> Double-click the installer. If Windows Defender SmartScreen shows <em>"Windows protected your PC"</em>, click <strong>"More info"</strong> and select <strong>"Run anyway"</strong> (standard prompt for unnotarized evaluation builds).
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <CheckCircleIcon color="secondary" fontSize="small" sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  <strong>Step 3:</strong> Follow the setup wizard or run directly. The app connects automatically to the Node.js microservices.
                </Typography>
              </Box>
            </Stack>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<DownloadIcon />}
              href={downloads.exe.url}
              download={downloads.exe.fileName}
              sx={{ fontWeight: 700 }}
            >
              Download Windows Executable ({downloads.exe.size})
            </Button>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ borderTop: `1px solid ${theme.palette.divider}`, px: 3, py: 2 }}>
        <Button onClick={() => dispatch(closeInstallGuide())} variant="outlined">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}
