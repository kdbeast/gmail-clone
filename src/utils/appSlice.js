import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    emails: [],
    selectedEmail: null,
    searchText: "",
    user: null,
    isMenuOpen: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsMenuOpen: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const {
  setOpen,
  setEmails,
  setSelectedEmail,
  setSearchText,
  setUser,
  setIsMenuOpen,
} = appSlice.actions;
export default appSlice.reducer;
