import { createSlice } from '@reduxjs/toolkit';

const downloadSlice = createSlice({
  name: 'downloads',
  initialState: {
    downloadStats: {
      apk: 142,
      exe: 87,
      mac: 53,
      resume: 310,
    },
    lastDownloaded: null,
  },
  reducers: {
    incrementDownload: (state, action) => {
      const type = action.payload; // 'apk' | 'exe' | 'mac' | 'resume'
      if (state.downloadStats[type] !== undefined) {
        state.downloadStats[type] += 1;
      }
      state.lastDownloaded = {
        type,
        timestamp: new Date().toISOString(),
      };
    },
  },
});

export const { incrementDownload } = downloadSlice.actions;
export default downloadSlice.reducer;
