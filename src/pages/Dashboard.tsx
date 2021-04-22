import React, { useState, useEffect } from 'react';

import Table from '../components/Table';
import api from '../api';

const Dashboard: React.FunctionComponent = () => {
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		(async function() {
			const userEmail: string | null = localStorage.getItem('user_email');
			const token: string | null = localStorage.getItem('access_token');

			if (!userEmail || !token) {
				return;
			}

			const { data: userData } = await api.getUserInfo({ email: userEmail, accessToken: token });
			setUserInfo(userData);
		})();
	}, []);

	return (
		<React.Fragment>
			<h1>Dashboard</h1>
			<Table />
		</React.Fragment>
	)
}

export default Dashboard;