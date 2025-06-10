import { createSlice } from '@reduxjs/toolkit';

const initialTheme = localStorage.getItem('theme') === 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    dark: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
      localStorage.setItem('theme', state.dark ? 'dark' : 'light');
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
