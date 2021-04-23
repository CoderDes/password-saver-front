import React, { useState, useEffect } from 'react';

import Table from '../components/Table';
import api from '../api';
import { IUser } from '../interfaces/index';

const Dashboard: React.FunctionComponent = () => {
	const initialUserState: IUser = {
		_id: '',
		email: '',
		records: [],
	}
	const [userInfo, setUserInfo] = useState(initialUserState);

	useEffect(() => {
		(async function() {
			const userEmail: string | null = localStorage.getItem('user_email');
			const token: string | null = localStorage.getItem('access_token');

			if (!userEmail || !token) {
				return;
			}

			const { data } = await api.getUserInfo({ email: userEmail, accessToken: token });
			setUserInfo(data);
		})();
	}, []);

	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			<Table records={userInfo.records} />
		</React.Fragment>
	)
}

export default Dashboard;