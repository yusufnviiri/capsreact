import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsReducer';

const rootReducer = combineReducers({
  missions: missionsReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;
