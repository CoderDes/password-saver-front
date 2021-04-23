import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteRecord } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC } from '../constants/index';
import { IRecord } from '../interfaces/index';


const Record: React.FunctionComponent<IRecord> = (props: IRecord) => {
	const [isHovered, setIsHovered] = useState(false);

	const dispatch = useDispatch();

	const handleDelete = (e: MouseEvent): void => {
		e.preventDefault();
		const accessToken: string | null = localStorage.getItem(ACCESS_TOKEN_KEY_IN_LC);
		dispatch(deleteRecord({ id: props._id, accessToken }));
	}

	return (
		<div>
			<span>{props.title}</span>
			<input 
				type={isHovered ? 'text' : 'password'}
				value={props.password}
				readOnly // change later
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			/>
			<button
				onClick={handleDelete}
				type="submit"
			>
				Delete
			</button>
		</div>
	);
}

export default Record;