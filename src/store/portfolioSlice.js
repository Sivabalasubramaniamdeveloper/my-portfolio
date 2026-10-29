import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    activeNavSection: 'home',
    projectFilter: 'all', // 'all' | 'published' | 'desktop' | 'mobile' | 'ai'
    contactForm: {
      name: '',
      email: '',
      subject: '',
      message: '',
      status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
    },
    toast: {
      open: false,
      message: '',
      severity: 'success', // 'success' | 'info' | 'warning' | 'error'
    },
  },
  reducers: {
    setActiveNavSection: (state, action) => {
      state.activeNavSection = action.payload;
    },
    setProjectFilter: (state, action) => {
      state.projectFilter = action.payload;
    },
    updateContactField: (state, action) => {
      const { field, value } = action.payload;
      state.contactForm[field] = value;
    },
    setContactStatus: (state, action) => {
      state.contactForm.status = action.payload;
    },
    resetContactForm: (state) => {
      state.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: '',
        status: 'idle',
      };
    },
    showToast: (state, action) => {
      state.toast = {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity || 'success',
      };
    },
    hideToast: (state) => {
      state.toast.open = false;
    },
  },
});

export const {
  setActiveNavSection,
  setProjectFilter,
  updateContactField,
  setContactStatus,
  resetContactForm,
  showToast,
  hideToast,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
