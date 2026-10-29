import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Stack,
  useTheme,
  Divider,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const theme = useTheme();
  const { experience, education } = portfolioData;

  return (
    <Box id="experience" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 6 }}>
          <Chip
            label="CAREER MILESTONES"
            color="primary"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2 }}>
            Experience &amp; Education
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Over 3 years of hands-on software development engineering client-facing applications for enterprises and consumers.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Work Experience */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <WorkIcon color="primary" />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Work History
              </Typography>
            </Box>

            <Stack spacing={3}>
              {experience.map((job, idx) => (
                <Card
                  key={idx}
                  className="glow-card"
                  sx={{
                    p: 3.5,
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', mb: 1.5 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary' }}>
                        {job.role}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                        {job.company}
                      </Typography>
                    </Box>
                    <Chip
                      label={job.period}
                      size="small"
                      sx={{
                        fontWeight: 700,
                        backgroundColor:
                          theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)',
                        color: 'primary.main',
                      }}
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 2 }}>
                    📍 {job.location}
                  </Typography>

                  <Stack spacing={1.2}>
                    {job.highlights.map((point, pIdx) => (
                      <Box key={pIdx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                        <CheckCircleIcon fontSize="small" sx={{ color: '#10B981', mt: 0.3 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Education & Achievements */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <SchoolIcon sx={{ color: '#818CF8' }} />
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Education
              </Typography>
            </Box>

            <Stack spacing={3} sx={{ mb: 5 }}>
              {education.map((edu, idx) => (
                <Card
                  key={idx}
                  className="glow-card"
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#818CF8', fontWeight: 700, mb: 0.5 }}>
                    {edu.institution}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {edu.period} • {edu.location}
                    </Typography>
                    <Chip label={edu.score} size="small" color="secondary" sx={{ fontWeight: 700, height: 22 }} />
                  </Box>
                </Card>
              ))}
            </Stack>

            {/* Achievements Box */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <EmojiEventsIcon sx={{ color: '#F59E0B' }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Achievements &amp; Publishing
              </Typography>
            </Box>

            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                backgroundColor:
                  theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(241, 245, 249, 0.9)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#F59E0B' }}>
                  ★ Published Dart Package (currency_pick on pub.dev)
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Open-source currency selector with full internationalization, currency symbols, and WCAG accessibility.
                </Typography>
              </Box>

              <Divider sx={{ my: 1.5 }} />

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  ★ Flutter Automation System (setup.sh)
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Created custom bootstrap engine cutting project setup time by 80% while establishing BLoC directory conventions.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
