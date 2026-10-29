import { createSlice } from '@reduxjs/toolkit';

const mineAiSlice = createSlice({
  name: 'mineAi',
  initialState: {
    activeFeatureId: 'voice-tasks',
    activePlatformTab: 'mobile', // 'mobile' | 'desktop'
    selectedScreenshot: null, // modal viewer
    isScreenshotModalOpen: false,
    isInstallGuideOpen: false,
    selectedInstallPlatform: 'android', // 'android' | 'windows' | 'macos'
  },
  reducers: {
    setActiveFeatureId: (state, action) => {
      state.activeFeatureId = action.payload;
    },
    setActivePlatformTab: (state, action) => {
      state.activePlatformTab = action.payload;
    },
    openScreenshotModal: (state, action) => {
      state.selectedScreenshot = action.payload;
      state.isScreenshotModalOpen = true;
    },
    closeScreenshotModal: (state) => {
      state.isScreenshotModalOpen = false;
      state.selectedScreenshot = null;
    },
    openInstallGuide: (state, action) => {
      state.selectedInstallPlatform = action.payload || 'android';
      state.isInstallGuideOpen = true;
    },
    closeInstallGuide: (state) => {
      state.isInstallGuideOpen = false;
    },
  },
});

export const {
  setActiveFeatureId,
  setActivePlatformTab,
  openScreenshotModal,
  closeScreenshotModal,
  openInstallGuide,
  closeInstallGuide,
} = mineAiSlice.actions;

export default mineAiSlice.reducer;
