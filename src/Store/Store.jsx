import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../Features/themeSlice';
import sidebarReducer from '../Features/sidebarSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
  },
});
