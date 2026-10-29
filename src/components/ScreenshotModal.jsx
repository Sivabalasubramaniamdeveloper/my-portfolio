import React, { useState, useEffect } from 'react';
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
  Chip,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { closeScreenshotModal } from '../store/mineAiSlice';

export default function ScreenshotModal() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isScreenshotModalOpen, selectedScreenshot } = useSelector((state) => state.mineAi);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    if (selectedScreenshot) {
      setActiveImgIndex(selectedScreenshot.imageIndex || 0);
    }
  }, [selectedScreenshot]);

  if (!selectedScreenshot) return null;

  const images = selectedScreenshot.images || (selectedScreenshot.currentImage ? [selectedScreenshot.currentImage] : []);
  const currentImg = images[activeImgIndex] || images[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <Dialog
      open={isScreenshotModalOpen}
      onClose={() => dispatch(closeScreenshotModal())}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: 4,
          backgroundColor: theme.palette.mode === 'dark' ? '#0B1120' : '#FFFFFF',
          backgroundImage: 'none',
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'hidden',
        },
      }}
    >
      {/* Modal Header */}
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Chip label={selectedScreenshot.badge} color="primary" size="small" sx={{ fontWeight: 800 }} />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {selectedScreenshot.title}
          </Typography>
        </Box>
        <IconButton onClick={() => dispatch(closeScreenshotModal())} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent sx={{ p: { xs: 2, md: 3 } }}>
        {/* Screenshot Image Container */}
        <Box
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: '#020617',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 400,
            mb: 3,
          }}
        >
          <Box
            component="img"
            key={currentImg}
            src={currentImg}
            alt={selectedScreenshot.title}
            className="fade-in-slide"
            sx={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: 2,
            }}
          />

          {/* Navigation Arrows for multi-images */}
          {images.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.9)', color: '#0B1120' },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 12,
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.9)', color: '#0B1120' },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </>
          )}
        </Box>

        {/* Feature Explanation */}
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2 }}>
          {selectedScreenshot.longDesc}
        </Typography>

        {/* Metrics and Tags */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
          {selectedScreenshot.keyMetrics?.map((metric, i) => (
            <Chip
              key={i}
              icon={<CheckCircleOutlinedIcon fontSize="small" sx={{ color: '#10B981 !important' }} />}
              label={metric}
              size="small"
              sx={{
                borderRadius: 2,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                fontWeight: 600,
              }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {selectedScreenshot.tags?.map((tag, i) => (
            <Typography key={i} className="code-chip">
              #{tag}
            </Typography>
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={{ borderTop: `1px solid ${theme.palette.divider}`, px: 3, py: 2 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', mr: 'auto' }}>
          {images.length > 1
            ? `Shot ${activeImgIndex + 1} of ${images.length} • Real Simulator Capture`
            : 'Production UI Capture'}
        </Typography>
        <Button onClick={() => dispatch(closeScreenshotModal())} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
