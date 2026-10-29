import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Card,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuizIcon from '@mui/icons-material/Quiz';
import { portfolioData } from '../data/portfolioData';

export default function ReviewerNoticeSection() {
  const theme = useTheme();
  const { reviewerFaqs } = portfolioData;

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.6)' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', mb: 5 }}>
          <Chip
            label="FOR HIRING MANAGERS &amp; APP EVALUATORS"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 800, fontSize: '0.8rem', py: 0.5, mb: 2, letterSpacing: 1 }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900, fontSize: { xs: '2rem', sm: '2.6rem' }, mb: 2 }}>
            Frequently Asked Questions &amp; Evaluation Guide
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7 }}>
            Details regarding Play Console status, build integrity, testing credentials, and offline capabilities.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {reviewerFaqs.map((faq, idx) => (
            <Accordion
              key={idx}
              defaultExpanded={idx === 0}
              sx={{
                mb: 2,
                borderRadius: '16px !important',
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: 'none',
                '&:before': { display: 'none' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ px: 3, py: 1.5 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                  {faq.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
