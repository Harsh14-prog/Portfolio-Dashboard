import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: window.innerWidth >= 768, 
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      if (typeof action.payload === 'boolean') {
        state.isOpen = action.payload; 
      } else {
        state.isOpen = !state.isOpen;  
      }
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
