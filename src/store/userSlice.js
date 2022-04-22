import { createSlice } from "@reduxjs/toolkit";
import uniqid from 'uniqid';


const user = {
  id: uniqid(),
  role: 'guest',
  nickname: '',
  passw: '',
  isAuth: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user
  },
  reducers: {
    setUser(state, action) {
      state.user = {...user, ...action.payload, isAuth: true, role: action.payload.role};
    },
    resetUser(state, action) {
      state.user = user
    }
  }
})

export const {setUser, resetUser} = userSlice.actions;
export default userSlice.reducer;