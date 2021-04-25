import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import crypterWorker from '../../worker/crypter';
import { saveRecord } from '../../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC } from '../../constants/index';
import { IRootState } from '../../interfaces';

import AddRecordWrapper from './style';
import Button from '../Button/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const AddRecords: React.FunctionComponent = () => {
	const userId: string = useSelector((state: IRootState) => state.userData._id);
	const dispatch = useDispatch();

	const [titleVal, setTitleValue] = useState('');
	const [passVal, setPassVal] = useState('');
	const [isShowPass, setIsShowPass] = useState(false);


	const hangleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTitleValue(e.currentTarget.value);
	}

	const hangleChangePass = (e: React.ChangeEvent<HTMLInputElement>): void =>  {
		setPassVal(e.target.value.trim());
	}

	const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) =>  {
		e.preventDefault();

		const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY_IN_LC);
		const title = titleVal;
		const decryptedPassword = passVal;

		setTitleValue('');
		setPassVal('');

		const encryptedPassword = await crypterWorker.encryptWorker(decryptedPassword);

		await dispatch(saveRecord({
			title,
			password: encryptedPassword,
			userId,
			accessToken,
		}));
	}
 
	return (
		<AddRecordWrapper>
			<div className="wrapper wrapper--fields">
				<input
					className='field field--title'
					type='text' 
					value={titleVal}
					onChange={hangleChangeTitle}
					placeholder='Enter title'
				/>
				<div className='wrapper wrapper--password'>
					<input
						className='field field--password'
						type={ isShowPass ? 'text' : 'password' } 
						value={passVal}
						onChange={hangleChangePass}
						placeholder='Enter password'
					/>
					<FontAwesomeIcon
						className="icon"
						icon={faEye}
						onMouseDown={() => setIsShowPass(true)}
						onMouseUp={() => setIsShowPass(false)}
					/>
				</div>
			</div>
			<Button
				type="submit"
				onClick={onSubmit}
			>
				Save
			</Button>
		</AddRecordWrapper>
	);
};

export default AddRecords;