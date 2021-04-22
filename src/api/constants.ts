export const API_URL = process.env.REACT_APP_API_HOST;
export const LOGIN_URI = `${API_URL}/user/login`;
export const REGISTER_URI = `${API_URL}/user/register`;
export const RECORD_URI = '';
export const USER_URI = '';

export interface AuthParams {
	email: string;
	password: string;
}