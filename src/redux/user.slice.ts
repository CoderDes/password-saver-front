import { createSlice } from '@reduxjs/toolkit';

import api from '../api/index';
import { GetUserInfoDto, RecordSaveDto } from '../dto/index';
import { IUser } from '../interfaces/index';

const initialUserState: IUser = {
	_id: '',
	email: '',
	records: [],
}

const slice = createSlice({
	name: 'userData',
	initialState: initialUserState,
	reducers: {
		fetchUserDataSuccess: (state, action) => {
			const { _id, email, records } = action.payload;
			return {...state, _id, email, records};
		},
		saveRecordSuccess: (state, action) => {
			return {
				...state,
				records: [...state.records, ...[action.payload]],
			}
		}
	}
});

export default slice.reducer;

const { fetchUserDataSuccess } = slice.actions;
const { saveRecordSuccess } = slice.actions;

export const fetchUserData = (dto: GetUserInfoDto) => async (dispatch: any) => {
	try {
		const { data } = await api.getUserInfo(dto);
		dispatch(fetchUserDataSuccess(data));
	} catch(error) {
		console.error(error.message);
	}
}

export const saveRecord = (dto: RecordSaveDto) => async (dispatch: any) => {
	try {
		const { data } = await api.saveRecord(dto);
		dispatch(saveRecordSuccess(data))
	} catch(error) {
		console.error(error.message);
	}
}