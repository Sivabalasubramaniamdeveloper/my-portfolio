import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import portfolioReducer from './portfolioSlice';
import mineAiReducer from './mineAiSlice';
import downloadReducer from './downloadSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    portfolio: portfolioReducer,
    mineAi: mineAiReducer,
    downloads: downloadReducer,
  },
});

export default store;
