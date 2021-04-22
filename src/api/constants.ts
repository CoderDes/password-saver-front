export const API_URI = process.env.REACT_APP_API_HOST;
export const LOGIN_URI = `${API_URI}/user/login`;
export const REGISTER_URI = `${API_URI}/user/register`;

export interface AuthParams {
	email: string;
	password: string;
}