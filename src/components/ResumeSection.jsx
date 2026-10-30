import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Chip,
  Divider,
  Stack,
  useTheme,
  Grid,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LaunchIcon from '@mui/icons-material/Launch';
import ShopIcon from '@mui/icons-material/Shop';
import ExtensionIcon from '@mui/icons-material/Extension';
import { portfolioData } from '../data/portfolioData';
import { incrementDownload } from '../store/downloadSlice';
import { showToast } from '../store/portfolioSlice';

export default function ResumeSection() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { developer, mineAi, experience, education, otherProjects } = portfolioData;
  const resumeDownloads = useSelector((state) => state.downloads.downloadStats.resume);

  const handleDownloadPdf = () => {
    dispatch(incrementDownload('resume'));
    dispatch(
      showToast({
        message: 'Downloading Siva Bala Subramaniam P Resume (PDF)...',
        severity: 'success',
      })
    );

    const link = document.createElement('a');
    link.href = mineAi.downloads.resume.url;
    link.download = 'Siva_Bala_Subramaniam_P_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box id="resume" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: 6 }} className="no-print">
          <Chip
            label="UPDATED CANDIDATE PROFILE"
            color="primary"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2 }}>
            Curriculum Vitae / Resume
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7, mb: 3 }}>
            Complete profile with verified production track record across Google Play Store, pub.dev, Apple App Store, and the newly developed <strong>MineAI (Mobile APK &amp; Desktop Suite)</strong>.
          </Typography>

          {/* Action Buttons */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadPdf}
              sx={{ py: 1.4, px: 3.5, fontWeight: 800, borderRadius: 3 }}
            >
              Download Resume (PDF)
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              sx={{ py: 1.4, px: 3, fontWeight: 700, borderRadius: 3 }}
            >
              Print / Save as PDF
            </Button>
          </Stack>

          <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mt: 1.5 }}>
            Total Downloads by Recruiters: {resumeDownloads} • File: Siva_Bala_Subramaniam_P_Resume.pdf
          </Typography>
        </Box>

        {/* Paper Document Representation */}
        <Card
          sx={{
            p: { xs: 3, sm: 5, md: 7 },
            borderRadius: 4,
            backgroundColor: theme.palette.mode === 'dark' ? '#0F172A' : '#FFFFFF',
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Resume Header */}
          <Box sx={{ pb: 3, borderBottom: `2px solid ${theme.palette.primary.main}` }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '1.8rem', sm: '2.4rem' } }}>
                  {developer.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 700, mt: 0.5 }}>
                  {developer.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  📍 {developer.location}
                </Typography>
              </Box>
              <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  📞 <a href={`tel:${developer.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{developer.phone}</a>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                  ✉️ <a href={`mailto:${developer.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{developer.email}</a>
                </Typography>
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mt: 0.5 }}>
                  🔗 <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>linkedin.com/in/siva-bala-subramaniam-p</a>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Profile Summary */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
              Professional Summary
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              {developer.summary}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Core Technical Competencies */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 1.5 }}>
              Core Technical Competencies
            </Typography>
            <Grid container spacing={1.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>Languages &amp; Frameworks:</strong> Dart, Flutter (Mobile &amp; Desktop), React.js, JavaScript, Node.js (Express 5.2), HTML5, CSS3
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>Architecture &amp; State:</strong> BLoC, Cubit, Redux Toolkit, Clean Architecture, Dependency Injection (GetIt)
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>Backend &amp; Databases:</strong> Node.js Microservices, Supabase (PostgreSQL), Firebase Suite (Firestore, Auth, FCM), SQLite (sqflite)
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>Generative AI &amp; Vision:</strong> Google Gemini 2.5 Flash, Flowise, LangChain RAG, OpenAI API, ML Kit OCR, Voice STT/TTS
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>Security &amp; Hardware:</strong> Biometric Authentication (FaceID/Fingerprint), AES-256 Vault, flutter_secure_storage
                </Typography>
                <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                  <strong>DevOps &amp; Publishing:</strong> Google Play Console, Apple App Store &amp; TestFlight, CI/CD GitHub Actions, pub.dev Publisher
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* NEW FEATURED PROJECT: MineAI */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>
              Flagship Project: MineAI Suite (Full-Stack AI Productivity Hub)
            </Typography>

            <Box sx={{ p: 2.5, borderRadius: 3, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.05)', border: '1px solid rgba(56, 189, 248, 0.25)', mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  MineAI — Cross-Platform AI Assistant (Android APK &amp; Windows Desktop)
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#10B981' }}>
                  Flutter, Node.js Express 5.2, Supabase, Gemini 2.5 Flash, BLoC
                </Typography>
              </Box>

              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, fontWeight: 600 }}>
                Platforms: Universal Android APK &amp; Windows Desktop (.exe) • Direct Evaluation Binaries Available on this Portfolio
              </Typography>

              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Full-Stack Architecture:</strong> Engineered a cross-platform mobile and desktop productivity application integrated with a Node.js Express 5.2 microservice backend and Supabase PostgreSQL.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>AI Voice Task Extraction:</strong> Implemented hands-free speech-to-text pipeline sending voice notes to Google Gemini 2.5 Flash, extracting title, category, priority, and scheduled dates directly into offline SQLite with local alarm notifications.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>Multi-Store Price Comparison:</strong> Built real-time parallel web scrapers using Cheerio &amp; Axios across Amazon, Flipkart, and Meesho, calculating best deals, savings margins, and ratings dynamically.
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  • <strong>City News &amp; Security:</strong> Developed boundary-filtered RSS news scraper for 8 Indian metropolitan cities with editorial photography, alongside a biometric-locked AES-256 encrypted private vault.
                </Typography>
              </Stack>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Key Production Projects with Play Store / Store Links */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>
              Production Projects &amp; Published Apps
            </Typography>

            <Grid container spacing={2}>
              {/* EnExpense */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, borderRadius: 2.5, border: `1px solid ${theme.palette.divider}`, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      EnExpense — Personal Finance Tracker
                    </Typography>
                    <Chip
                      component="a"
                      href="https://play.google.com/store/search?q=EnExpense&c=apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ShopIcon sx={{ fontSize: '0.9rem !important', color: '#10B981' }} />}
                      label="Play Store"
                      size="small"
                      clickable
                      sx={{ fontWeight: 700, fontSize: '0.72rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                    Flutter, Sqflite, Firebase, BLoC, ML Kit OCR, CI/CD
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Offline-first finance tracking with Sqflite, Firestore sync, receipt scanning via ML Kit OCR, and Excel/PDF reports.
                  </Typography>
                </Box>
              </Grid>

              {/* Yaantrac */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, borderRadius: 2.5, border: `1px solid ${theme.palette.divider}`, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      Yaantrac — Vehicle Tracking Application
                    </Typography>
                    <Chip
                      component="a"
                      href="https://play.google.com/store/search?q=Yaantrac&c=apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ShopIcon sx={{ fontSize: '0.9rem !important', color: '#10B981' }} />}
                      label="Play Store"
                      size="small"
                      clickable
                      sx={{ fontWeight: 700, fontSize: '0.72rem', backgroundColor: 'rgba(16, 185, 129, 0.12)', color: '#10B981' }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                    Flutter, WebSockets, Flutter Map, BLoC, REST APIs
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Real-time GPS vehicle tracking with WebSockets, geofencing boundary alerts, role-based dashboards, and trip analytics.
                  </Typography>
                </Box>
              </Grid>

              {/* currency_pick */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, borderRadius: 2.5, border: `1px solid ${theme.palette.divider}`, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      currency_pick — Open-Source Flutter Package
                    </Typography>
                    <Chip
                      component="a"
                      href="https://pub.dev/packages/currency_pick"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<ExtensionIcon sx={{ fontSize: '0.9rem !important', color: '#EC4899' }} />}
                      label="pub.dev"
                      size="small"
                      clickable
                      sx={{ fontWeight: 700, fontSize: '0.72rem', backgroundColor: 'rgba(236, 72, 153, 0.12)', color: '#EC4899' }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                    Dart, Flutter, Open Source, pub.dev Package Ecosystem
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Published open-source Flutter package providing a customizable currency picker with search and flag icons.
                  </Typography>
                </Box>
              </Grid>

              {/* E-Book Publishing Desktop Application */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ p: 2, borderRadius: 2.5, border: `1px solid ${theme.palette.divider}`, height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                      E-Book Publishing Desktop Application
                    </Typography>
                    <Chip
                      component="a"
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      label="Mac App Store"
                      size="small"
                      clickable
                      sx={{ fontWeight: 700, fontSize: '0.72rem', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8' }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                    Flutter Desktop (macOS &amp; Windows), XML, CKEditor
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    Desktop publishing software with automated XML transformation and multi-pane structured editing.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Professional Work Experience */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 2 }}>
              Professional Experience
            </Typography>

            {experience.map((job, idx) => (
              <Box key={idx} sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, fontSize: '1rem' }}>
                    {job.role} — <em>{job.company}</em>
                  </Typography>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                    {job.period}
                  </Typography>
                </Box>
                <Stack spacing={0.8} sx={{ mt: 1 }}>
                  {job.highlights.map((pt, pIdx) => (
                    <Typography key={pIdx} variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      • {pt}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Education */}
          <Box sx={{ my: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mb: 1.5 }}>
              Education
            </Typography>
            {education.map((edu, idx) => (
              <Box key={idx} sx={{ mb: 1.5, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {edu.degree} ({edu.score})
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {edu.period} • {edu.location}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
