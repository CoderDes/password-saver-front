import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Table from '../components/Table';
import { fetchUserData } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC, USER_EMAIL_KEY_IN_LC} from '../constants/index';
import { IRootState } from '../interfaces';

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

	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			{ isLoading 
				? 'LOADING AND DESCRYPTING PASSWORDS...' 
				: <Table records={userInfo.records} />
			}
		</React.Fragment>
	)
}

export default Dashboard;