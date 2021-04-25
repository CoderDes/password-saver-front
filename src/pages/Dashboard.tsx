import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchUserData } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC, USER_EMAIL_KEY_IN_LC} from '../constants/index';
import { IRootState } from '../interfaces';

import Header from '../components/Header/index';
import Table from '../components/Table/index';
import Loader from '../components/Loader';

const Dashboard: React.FunctionComponent = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userStoreData = useSelector((state: IRootState) => state.userData);

	const [userInfo, setUserInfo] = useState(userStoreData);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (localStorage.getItem(ACCESS_TOKEN_KEY_IN_LC) === null) {
			history.push('/');
		}
		handleFetchData();
	}, []);

	useEffect(() => {
		setUserInfo(userStoreData);
	}, [userStoreData]);

	useEffect(() => {
		setUserInfo(userStoreData);
	}, [userStoreData.records]);


	const handleFetchData = async () => {
		const userEmail: string | null = localStorage.getItem(USER_EMAIL_KEY_IN_LC);
		const token: string | null = localStorage.getItem(ACCESS_TOKEN_KEY_IN_LC);

		if (!userEmail || !token) {
			return;
		}

		setIsLoading(true);
		await dispatch(fetchUserData({ email: userEmail, accessToken: token }));
		setIsLoading(false);
	}

	const handleLogout = () => {
		localStorage.removeItem(ACCESS_TOKEN_KEY_IN_LC);
		history.push('/');
	}

	return (
		<React.Fragment>
			<Header 
				pageTitle="Dashboard"
				userEmail={userInfo.email}
				handleLogout={handleLogout}
			/>
			<div 
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '70%',
				}}
			>
				{ isLoading 
					? 	<Loader 
							loaderTitle="fetching and decrypting passwords"
						/>
					: 	<Table records={userInfo.records} />
				}
			</div>
		</React.Fragment>
	)
}

export default Dashboard;