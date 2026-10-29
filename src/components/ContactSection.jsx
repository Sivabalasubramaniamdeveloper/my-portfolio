import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Chip,
  Stack,
  useTheme,
  Tooltip,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import LaunchIcon from '@mui/icons-material/Launch';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import { portfolioData } from '../data/portfolioData';
import {
  updateContactField,
  resetContactForm,
  showToast,
} from '../store/portfolioSlice';

export default function ContactSection() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { developer } = portfolioData;
  const contactForm = useSelector((state) => state.portfolio.contactForm);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Full-Time Flutter / Mobile');

  const inquiryTopics = [
    'Full-Time Flutter / Mobile',
    'Desktop Software (Windows/macOS)',
    'Full-Stack Node.js & AI',
    'Technical Advisory / Interview',
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
      dispatch(showToast({ message: 'Email copied to clipboard!', severity: 'info' }));
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
      dispatch(showToast({ message: 'Phone number copied to clipboard!', severity: 'info' }));
    }
  };

  const handleChange = (e) => {
    dispatch(
      updateContactField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      dispatch(
        showToast({
          message: 'Please fill in your name, email, and message.',
          severity: 'warning',
        })
      );
      return;
    }

    // Direct mailto dispatch fallback
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${selectedTopic}] From ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nTopic: ${selectedTopic}\n\nMessage:\n${contactForm.message}`
    );
    window.location.href = `mailto:${developer.email}?subject=${subject}&body=${body}`;

    dispatch(
      showToast({
        message: `Thank you, ${contactForm.name}! Your email client has been prepared. Siva will respond promptly.`,
        severity: 'success',
      })
    );
    dispatch(resetContactForm());
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 840, mx: 'auto', mb: 6 }}>
          <Chip
            label="LET'S CONNECT &amp; COLLABORATE"
            color="primary"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.2rem', sm: '3rem' }, mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Available for immediate technical interviews, senior Flutter engineering roles, and high-impact cross-platform product development. Reach out via your preferred channel below.
          </Typography>
        </Box>

        {/* 1. Bento Grid: 4 Quick-Action Direct Contact Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {/* Email Card */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              className="glow-card"
              sx={{
                p: 3,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      backgroundColor: 'rgba(56, 189, 248, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon sx={{ color: '#38BDF8', fontSize: 24 }} />
                  </Box>
                  <Tooltip title={copiedEmail ? 'Copied!' : 'Copy Email'}>
                    <IconButton
                      size="small"
                      onClick={() => handleCopy(developer.email, 'email')}
                      sx={{ border: `1px solid ${theme.palette.divider}` }}
                    >
                      {copiedEmail ? <CheckIcon fontSize="small" sx={{ color: '#10B981' }} /> : <ContentCopyIcon fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                  Direct Email
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, wordBreak: 'break-all', mt: 0.5, mb: 1 }}>
                  {developer.email}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  Fast response guaranteed within 24 hours.
                </Typography>
              </Box>

              <Button
                component="a"
                href={`mailto:${developer.email}`}
                variant="outlined"
                size="small"
                fullWidth
                endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
                sx={{ mt: 2.5, fontWeight: 700, borderRadius: 2 }}
              >
                Send Email
              </Button>
            </Card>
          </Grid>

          {/* Phone / WhatsApp Card */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              className="glow-card"
              sx={{
                p: 3,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <WhatsAppIcon sx={{ color: '#10B981', fontSize: 24 }} />
                  </Box>
                  <Tooltip title={copiedPhone ? 'Copied!' : 'Copy Phone'}>
                    <IconButton
                      size="small"
                      onClick={() => handleCopy(developer.phone, 'phone')}
                      sx={{ border: `1px solid ${theme.palette.divider}` }}
                    >
                      {copiedPhone ? <CheckIcon fontSize="small" sx={{ color: '#10B981' }} /> : <ContentCopyIcon fontSize="small" />}
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                  Phone &amp; WhatsApp
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mt: 0.5, mb: 1 }}>
                  {developer.phone}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  Available for phone calls &amp; WhatsApp messaging.
                </Typography>
              </Box>

              <Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
                <Button
                  component="a"
                  href={`tel:${developer.phone}`}
                  variant="outlined"
                  size="small"
                  sx={{ flex: 1, fontWeight: 700, borderRadius: 2 }}
                >
                  Call
                </Button>
                <Button
                  component="a"
                  href={`https://wa.me/${developer.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ flex: 1.3, fontWeight: 700, borderRadius: 2 }}
                >
                  WhatsApp
                </Button>
              </Stack>
            </Card>
          </Grid>

          {/* LinkedIn Card */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              className="glow-card"
              sx={{
                p: 3,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LinkedInIcon sx={{ color: '#818CF8', fontSize: 24 }} />
                  </Box>
                  <Chip
                    label="Verified"
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(99, 102, 241, 0.15)',
                      color: '#818CF8',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                    }}
                  />
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                  Professional Network
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mt: 0.5, mb: 1 }}>
                  Siva Bala Subramaniam P
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  Connect for endorsements, career updates &amp; references.
                </Typography>
              </Box>

              <Button
                component="a"
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                color="primary"
                size="small"
                fullWidth
                endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
                sx={{ mt: 2.5, fontWeight: 700, borderRadius: 2 }}
              >
                LinkedIn Profile
              </Button>
            </Card>
          </Grid>

          {/* Location & Relocation Card */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              className="glow-card"
              sx={{
                p: 3,
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 3,
                      backgroundColor: 'rgba(245, 158, 11, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LocationOnIcon sx={{ color: '#F59E0B', fontSize: 24 }} />
                  </Box>
                  <Chip
                    label="Active"
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#10B981',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                    }}
                  />
                </Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase' }}>
                  Current Location &amp; Mobility
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, mt: 0.5, mb: 1 }}>
                  Tirunelveli / Chennai, India
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  Open to Onsite, Hybrid, or Remote roles globally.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: 2.5,
                  p: 1,
                  borderRadius: 2,
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.7)',
                  textAlign: 'center',
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 700 }}>
                  Immediate Joining Available
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* 2. Sleek Direct Inquiry Dispatch Console */}
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4.5,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.06)',
          }}
        >
          <Grid container spacing={4}>
            {/* Left Column: Heading & Topic Chips */}
            <Grid size={{ xs: 12, md: 4.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2.5,
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ChatBubbleOutlinedIcon sx={{ color: '#38BDF8' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 900 }}>
                  Send a Direct Note
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                Whether you have an open Flutter or Desktop engineering role, need an architecture review, or want to test MineAI APK on your device, drop a message below.
              </Typography>

              <Typography variant="caption" sx={{ fontWeight: 800, color: 'text.secondary', letterSpacing: 0.5, display: 'block', mb: 1.5, textTransform: 'uppercase' }}>
                Select Inquiry Purpose:
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {inquiryTopics.map((topic) => (
                  <Chip
                    key={topic}
                    label={topic}
                    clickable
                    onClick={() => setSelectedTopic(topic)}
                    color={selectedTopic === topic ? 'primary' : 'default'}
                    variant={selectedTopic === topic ? 'filled' : 'outlined'}
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      py: 1.8,
                      borderRadius: 2,
                    }}
                  />
                ))}
              </Box>

              {/* Response Time Indicator */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor:
                    theme.palette.mode === 'dark' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(16, 185, 129, 0.05)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  className="badge-live-pulse"
                  sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10B981' }}
                />
                <Typography variant="caption" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Active Candidate • Fast email turnaround within business hours.
                </Typography>
              </Box>
            </Grid>

            {/* Right Column: Form Fields */}
            <Grid size={{ xs: 12, md: 7.5 }}>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name *"
                      name="name"
                      value={contactForm.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe / HR Manager"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Email Address *"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Inquiry Topic / Subject"
                      name="subject"
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message *"
                      name="message"
                      value={contactForm.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your opportunity, project scope, or technical queries..."
                      variant="outlined"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontWeight: 800,
                        borderRadius: 3,
                        fontSize: '0.98rem',
                      }}
                    >
                      Send Message to Siva
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
