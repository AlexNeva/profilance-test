import { createSlice } from "@reduxjs/toolkit";

const popups = [
  {
    type: 'auth',
    isActive: false,
  },
  {
    type: 'create-article',
    isActive: false,
  },
]

const  popupSlice = createSlice({
  name: 'popup',
  initialState: {
    popups
  },
  reducers: {
    setActive(state, action) {
      state.popups = state.popups
      .map(popup => popup.type === action.payload ? {...popup, isActive: !popup.isActive} : popup)
    }
  }
})

export const {setActive} = popupSlice.actions;
export default popupSlice.reducer;