import React, { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Chip,
  Tooltip,
  useTheme,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function ImageSlider({ images = [], title = '', isDesktop = false, onZoom }) {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when feature changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  const hasMultiple = images.length > 1;

  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImg = images[currentIndex];

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Outer Shell: Desktop Window or Smartphone Frame */}
      {isDesktop ? (
        // Desktop Window Mockup
        <Box
          className="mockup-desktop"
          sx={{
            width: '100%',
            maxWidth: 820,
            cursor: onZoom ? 'pointer' : 'default',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.25)',
            },
          }}
          onClick={() => onZoom && onZoom(currentImg, currentIndex)}
        >
          {/* Window Header */}
          <Box className="mockup-desktop-header">
            <Box className="window-dots">
              <Box className="dot-red" />
              <Box className="dot-yellow" />
              <Box className="dot-green" />
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: '#94A3B8',
                fontFamily: 'monospace',
                ml: 2,
                fontSize: '0.75rem',
              }}
            >
              MineAI Desktop Control Suite • {title} {hasMultiple && `(${currentIndex + 1} / ${images.length})`}
            </Typography>
            <Tooltip title="Click to Enlarge Fullscreen">
              <IconButton size="small" sx={{ ml: 'auto', color: '#94A3B8' }}>
                <ZoomInIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Desktop Image Display */}
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#070B14',
              overflow: 'hidden',
              minHeight: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              key={currentImg}
              src={currentImg}
              alt={`${title} - screen ${currentIndex + 1}`}
              className="fade-in-slide"
              sx={{
                width: '100%',
                maxHeight: 520,
                objectFit: 'contain',
                display: 'block',
                borderRadius: '0 0 12px 12px',
              }}
            />

            {/* Slider Navigation Arrows */}
            {hasMultiple && (
              <>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
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
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(15, 23, 42, 0.75)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.9)', color: '#0B1120' },
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      ) : (
        // Smartphone Frame Mockup
        <Box
          className="mockup-phone"
          sx={{
            width: '100%',
            maxWidth: 340,
            cursor: onZoom ? 'pointer' : 'default',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.3)',
              transform: 'scale(1.01)',
            },
          }}
          onClick={() => onZoom && onZoom(currentImg, currentIndex)}
        >
          {/* Dynamic Island / Notch */}
          <Box className="mockup-phone-notch" />

          {/* Screen Display Container */}
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#000000',
              overflow: 'hidden',
              minHeight: 580,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              key={currentImg}
              src={currentImg}
              alt={`${title} - screen ${currentIndex + 1}`}
              className="fade-in-slide"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />

            {/* Slider Navigation Arrows for Phone */}
            {hasMultiple && (
              <>
                <IconButton
                  onClick={handlePrev}
                  size="small"
                  sx={{
                    position: 'absolute',
                    left: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    p: 0.8,
                    '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.9)', color: '#0B1120' },
                  }}
                >
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  size="small"
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    color: '#FFFFFF',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    p: 0.8,
                    '&:hover': { backgroundColor: 'rgba(56, 189, 248, 0.9)', color: '#0B1120' },
                  }}
                >
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </>
            )}

            {/* Floating Enlarge Hint */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                color: '#38BDF8',
                borderRadius: 2,
                px: 1,
                py: 0.4,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
              }}
            >
              <ZoomInIcon fontSize="small" />
              <Typography variant="caption" sx={{ fontSize: '0.7rem', fontWeight: 700 }}>
                Tap to Zoom
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Slider Thumbnail / Dot Indicators */}
      {hasMultiple && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          {images.map((img, idx) => (
            <Box
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              sx={{
                width: idx === currentIndex ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: idx === currentIndex ? '#38BDF8' : 'rgba(148, 163, 184, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  backgroundColor: '#38BDF8',
                },
              }}
            />
          ))}
          <Chip
            icon={<CollectionsIcon fontSize="small" />}
            label={`${currentIndex + 1} of ${images.length} Screenshots`}
            size="small"
            sx={{
              ml: 1,
              height: 22,
              fontSize: '0.72rem',
              fontWeight: 700,
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.08)',
              color: 'primary.main',
            }}
          />
        </Box>
      )}
    </Box>
  );
}
