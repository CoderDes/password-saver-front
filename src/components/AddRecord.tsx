import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import crypterWorker from '../worker/crypter';
import { saveRecord } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC } from '../constants/index';
import { IRootState } from '../interfaces';

const AddRecords: React.FunctionComponent = () => {
	const userId: string = useSelector((state: IRootState) => state.userData._id);
	const dispatch = useDispatch();

	const [titleVal, setTitleValue] = useState('');
	const [passVal, setPassVal] = useState('');
	const [isShowPass, setIsShowPass] = useState(false);


	const hangleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTitleValue(e.currentTarget.value.trim());
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
		<form>
			<input 
				type='text' 
				value={titleVal}
				onChange={hangleChangeTitle}
			/>
			<div>
				<input 
					type={ isShowPass ? 'text' : 'password' } 
					value={passVal}
					onChange={hangleChangePass}
				/>
				<div 
					style={{
						width: '10px', height: '10px', backgroundColor: 'lightcoral',
					}}
					onMouseDown={() => setIsShowPass(true)}
					onMouseUp={() => setIsShowPass(false)}
				>
					icon
				</div>
			</div>
			<button 
				type="submit"
				onClick={onSubmit}
			>
				Save
			</button>
		</form>
	);
};

export default AddRecords;