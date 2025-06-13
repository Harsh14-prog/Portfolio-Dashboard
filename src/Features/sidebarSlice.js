import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: window.innerWidth >= 768, // Open by default on desktop
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      if (typeof action.payload === 'boolean') {
        state.isOpen = action.payload; // Explicit open/close
      } else {
        state.isOpen = !state.isOpen;  // Toggle
      }
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
