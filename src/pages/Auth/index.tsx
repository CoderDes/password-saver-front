import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { 
	ACCESS_TOKEN_KEY_IN_LC, 
	USER_EMAIL_KEY_IN_LC 
} from '../../constants/index';
import { IAuth } from '../../interfaces/index';
import api from '../../api';

import Button from '../../components/Button/index';
import authFormStyles from './style';

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
				onSubmit={async (values: IAuth, actions: object) => {
					if (props.isLogin) {
						// TODO: fix typings
						const responseOnLogin: any = await api.login(values);
						if (responseOnLogin.status === 201) {
							const { data: { access_token } } = responseOnLogin;
							const { email }: { email: string } = jwt_decode(access_token);
							
							localStorage.setItem(USER_EMAIL_KEY_IN_LC, email);
							localStorage.setItem(ACCESS_TOKEN_KEY_IN_LC, access_token); 
							
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
				<Form style={authFormStyles.form}>
					<div style={authFormStyles.fieldWrapper}>
						<label 
							htmlFor="email"
							style={authFormStyles.fieldLabel}
						>
							Email
						</label>
						<Field
							style={authFormStyles.field}
							id='email'
							name='email'
							type='email'
							placeholder="Enter your email"
						/>
					</div>
					<div style={authFormStyles.fieldWrapper}>
						<label 
							htmlFor="password"
							style={authFormStyles.fieldLabel}
						>
							Password
						</label>
						<Field 
							style={authFormStyles.field}
							id='password'
							name='password'
							type="password"
							placeholder="Enter your password"
						/>
					</div>
					<Button
						style={authFormStyles.button} 
						type="submit"
					>
						{ props.isLogin ?  'Login' : 'Register' }
					</Button>	
					<Link
						style={authFormStyles.link}
						to={props.isLogin ? '/register' : '/'}
					>
						{props.isLogin ? 'Create account' : 'Sign in'}
					</Link>
				</Form>
			</Formik>
		</React.Fragment>
	)
}

export default AuthPage;