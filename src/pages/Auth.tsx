import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import * as Yup from 'yup';

import { AuthParams } from '../api/constants';
import api from '../api';

interface AuthFormValues {
	email: string;
	password: string;
}

interface AuthProps {
	isLogin: boolean;
}

const AuthPage: React.FunctionComponent<AuthProps> = (props: AuthProps) => {
	const initialValues: AuthFormValues = {
		email: '',
		password: '',
	}
	const history = useHistory();
	return (
		<React.Fragment>
			<h1>
				{ props.isLogin ?  'Login' : 'Register' }
			</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={async (values: AuthParams, actions: object) => {
					if (props.isLogin) {
						// TODO: fix typings
						const responseOnLogin: any = await api.login(values);
						if (responseOnLogin.status === 201) {
							const { data: { access_token } } = responseOnLogin;
							const { email }: { email: string } = jwt_decode(access_token);
							
							localStorage.setItem("user_email", email);
							localStorage.setItem("access_token", access_token); 
							
							history.push('/dashboard');
						}
						return;
					}

					const responseOnRegister = await api.register(values);

					if (responseOnRegister.status === 201) {
						// TODO: add notification
						history.push('/');
					}
				}}
			>
				<Form>
					<label htmlFor="email">Email</label>
					<Field 
						id='email'
						name='email'
						type='email'
						placeholder="Enter your email"
					/>
					<label htmlFor="password">Password</label>
					<Field 
						id='password'
						name='password'
						type="password"
					/>
					<button type="submit">
						{ props.isLogin ?  'Login' : 'Register' }
					</button> 
				</Form>
			</Formik>
		</React.Fragment>
	)
}

export default AuthPage;