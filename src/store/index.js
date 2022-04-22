import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './articlesSlice';
import userReducer from './userSlice';
import popupsReducer from './popupSlice';


export default configureStore({
  reducer: {
    articles: articlesReducer,
    user: userReducer,
    popups: popupsReducer,
  }
})