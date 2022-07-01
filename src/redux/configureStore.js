import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsReducer';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
