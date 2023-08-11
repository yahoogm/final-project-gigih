import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
});

const { reducer: videoReducers } = videoSlice;
export default videoReducers;
