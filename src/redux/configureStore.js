import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsReducer';
import rocketReducer from './rockets/rockets';


const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketReducer,
});

const store = configureStore({reducer: rootReducer});

export default store;
