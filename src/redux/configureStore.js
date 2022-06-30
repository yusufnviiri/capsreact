import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsReducer';
import rocketsReducer from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;
