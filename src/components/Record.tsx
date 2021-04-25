import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import crypterWorker from '../worker/crypter';
import { updateRecord, deleteRecord } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC } from '../constants/index';
import { IRecord } from '../interfaces/index';


const Record: React.FunctionComponent<IRecord> = (props: IRecord) => {
	const [isHovered, setIsHovered] = useState(false);
	const [passVal, setPassVal] = useState(props.password);

	const accessToken: string | null = localStorage.getItem(ACCESS_TOKEN_KEY_IN_LC);

	const dispatch = useDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setPassVal(e.target.value.trim());
	}

	const handleUpdate = async (e: MouseEvent): Promise<void> => {
		e.preventDefault();
		const encryptedPassword = await crypterWorker.encryptWorker(passVal);
		dispatch(updateRecord({ recordId: props._id, newPassword: encryptedPassword, accessToken }));
	}

	const handleDelete = (e: MouseEvent): void => {
		e.preventDefault();
		dispatch(deleteRecord({ id: props._id, accessToken }));
	}

	return (
		<form>
			<span>{props.title}</span>
			<input 
				type={isHovered ? 'text' : 'password'}
				value={passVal}
				onChange={handleChange}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
			<button
				onClick={handleUpdate}
				type="submit"
			>
				Update
			</button>
			<button
				onClick={handleDelete}
				type="submit"
			>
				Delete
			</button>
		</form>
	);
}

export default Record;