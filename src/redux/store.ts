import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userData from './user.slice';

const reducer = combineReducers({
	userData,
});

const store = configureStore({ reducer, devTools: true });

export default store;