import { createSlice } from '@reduxjs/toolkit';

import crypter from '../service/crypter';
import api from '../api/index';
import { GetUserInfoDto, RecordSaveDto, RecordDeleteDto } from '../dto/index';
import { IUser, IRecord } from '../interfaces/index';

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
		},
		deleteRecordSuccess: (state, action) => {
			return {
				...state,
				records: state.records.filter((record: IRecord) => {
					return record._id !== action.payload.recordId;
				})
			}
		},
	}
});

export default slice.reducer;

const { fetchUserDataSuccess } = slice.actions;
const { saveRecordSuccess } = slice.actions;
const { deleteRecordSuccess } = slice.actions;

export const fetchUserData = (dto: GetUserInfoDto) => async (dispatch: any) => {
	try {
		const { data } = await api.getUserInfo(dto);

		data.records = data.records.map((record: IRecord) => {
			record.password = crypter.decrypt(record.password);
			return record;
		})
		dispatch(fetchUserDataSuccess(data));
	} catch(error) {
		console.error(error.message);
	}
}

export const saveRecord = (dto: RecordSaveDto) => async (dispatch: any) => {
	try {
		const { data } = await api.saveRecord(dto);
		data.password = crypter.decrypt(data.password);
		dispatch(saveRecordSuccess(data))
	} catch(error) {
		console.error(error.message);
	}
}

export const deleteRecord = (dto: RecordDeleteDto) => async (dispatch: any) => {
	try {
		const { data: recordId } = await api.deleteRecord(dto);
		dispatch(deleteRecordSuccess(recordId));
	} catch (error) {
		console.error(error.message);
	}
}