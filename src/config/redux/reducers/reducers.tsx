import { combineReducers } from '@reduxjs/toolkit';
import videoReducers from '../videos/videosSlice';

export const Reducers = combineReducers({
  videos: videoReducers,
});

export type RootState = ReturnType<typeof Reducers>;
