import { createSlice } from '@reduxjs/toolkit';

const getInitialMode = () => {
  const saved = localStorage.getItem('siva_portfolio_theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: getInitialMode(),
    accentColor: '#38BDF8', // Electric Cyan
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      localStorage.setItem('siva_portfolio_theme', state.mode);
    },
    setThemeMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem('siva_portfolio_theme', state.mode);
    },
    setAccentColor: (state, action) => {
      state.accentColor = action.payload;
    },
  },
});

export const { toggleTheme, setThemeMode, setAccentColor } = themeSlice.actions;
export default themeSlice.reducer;
