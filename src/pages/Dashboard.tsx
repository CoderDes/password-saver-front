import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Table from '../components/Table';
import { fetchUserData } from '../redux/user.slice';
import { ACCESS_TOKEN_KEY_IN_LC, USER_EMAIL_KEY_IN_LC} from '../constants/index';
import { IRootState } from '../interfaces';

const Dashboard: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const userStoreData = useSelector((state: IRootState) => state.userData);

	const [userInfo, setUserInfo] = useState(userStoreData);

	useEffect(() => {
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

		dispatch(fetchUserData({ email: userEmail, accessToken: token }));
	}

	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			<Table records={userInfo.records} />
		</React.Fragment>
	)
}

export default Dashboard;