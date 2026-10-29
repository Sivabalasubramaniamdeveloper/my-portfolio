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
} from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DnsIcon from '@mui/icons-material/Dns';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const theme = useTheme();
  const { skillCategories } = portfolioData;

  const categoryIcons = [
    <SmartphoneIcon sx={{ color: '#38BDF8', fontSize: 28 }} />,
    <AccountTreeIcon sx={{ color: '#818CF8', fontSize: 28 }} />,
    <DnsIcon sx={{ color: '#34D399', fontSize: 28 }} />,
    <AutoAwesomeIcon sx={{ color: '#F59E0B', fontSize: 28 }} />,
    <SecurityIcon sx={{ color: '#EC4899', fontSize: 28 }} />,
    <RocketLaunchIcon sx={{ color: '#A78BFA', fontSize: 28 }} />,
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor:
          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.5)',
        position: 'relative',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: 6 }}>
          <Chip
            label="TECHNICAL ARSENAL"
            color="primary"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2 }}>
            Engineering Competencies &amp; Technical Stack
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Production-grade capabilities honed across 3+ years of commercial shipping. Clean architectural boundaries, full-stack microservices, generative AI vector workflows, and hardware-secured local vaults.
          </Typography>
        </Box>

        {/* Bento Grid: 6 Categorized Skill Domains (No percentage bars) */}
        <Grid container spacing={3.5}>
          {skillCategories.map((cat, idx) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
              <Card
                className="glow-card"
                sx={{
                  p: 3.5,
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  {/* Category Header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 3,
                        backgroundColor:
                          theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.8)' : 'rgba(241, 245, 249, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${theme.palette.divider}`,
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      {categoryIcons[idx % categoryIcons.length]}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.08rem', lineHeight: 1.3 }}>
                        {cat.category}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Category Description */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 3 }}>
                    {cat.description}
                  </Typography>

                  {/* Skill Items with Highlight Tags */}
                  <Stack spacing={1.5}>
                    {cat.skills.map((skill, sIdx) => (
                      <Box
                        key={sIdx}
                        sx={{
                          p: 1.2,
                          px: 1.5,
                          borderRadius: 2.5,
                          backgroundColor:
                            theme.palette.mode === 'dark'
                              ? 'rgba(15, 23, 42, 0.6)'
                              : 'rgba(241, 245, 249, 0.7)',
                          border: `1px solid ${theme.palette.divider}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 1,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleIcon sx={{ color: '#10B981', fontSize: 16 }} />
                          <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.88rem' }}>
                            {skill.name}
                          </Typography>
                        </Box>
                        {skill.highlight && (
                          <Chip
                            label={skill.highlight}
                            size="small"
                            sx={{
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              height: 22,
                              backgroundColor:
                                theme.palette.mode === 'dark'
                                  ? 'rgba(56, 189, 248, 0.12)'
                                  : 'rgba(2, 132, 199, 0.08)',
                              color: 'primary.main',
                              border: '1px solid rgba(56, 189, 248, 0.25)',
                            }}
                          />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
