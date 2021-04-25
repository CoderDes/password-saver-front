import { createSlice } from '@reduxjs/toolkit';

import crypter from '../service/crypter';
import crypterWorker from '../worker/crypter';
import api from '../api/index';
import { GetUserInfoDto, RecordSaveDto, RecordUpdateDto, RecordDeleteDto } from '../dto/index';
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
		updateRecordSuccess: (state, action) => {
			return {
				...state,
				records: state.records.map((record: IRecord) => {
					if (record._id === action.payload._id) {
						return {...record, password: action.payload.newPassword }
					}
					return record;
				})
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
const { updateRecordSuccess } = slice.actions;
const { deleteRecordSuccess } = slice.actions;

export const fetchUserData = (dto: GetUserInfoDto) => async (dispatch: any) => {
	try {
		const { data } = await api.getUserInfo(dto);

		const decryptedRecords = await Promise.all(
			data.records.map(async (record: IRecord) => {
				record.password = await crypterWorker.decryptWorker(record.password);
				return record;
			})
		);

		dispatch(fetchUserDataSuccess({ ...data, records: decryptedRecords }));
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

export const updateRecord = (dto: RecordUpdateDto) => async (dispatch: any) => {
	try {
		const {data: { _id, password } } = await api.updateRecord(dto);
		const decryptedPassword = crypter.decrypt(password);
		dispatch(updateRecordSuccess({_id, newPassword: decryptedPassword}))
	} catch (error) {
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