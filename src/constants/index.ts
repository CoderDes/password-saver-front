export const API_URI = process.env.REACT_APP_API_HOST;
export const LOGIN_URI = `${API_URI}/user/login`;
export const REGISTER_URI = `${API_URI}/user/register`;
export const RECORD_URI = `${API_URI}/record`;

export const ACCESS_TOKEN_KEY_IN_LC = 'access_token';
export const USER_EMAIL_KEY_IN_LC = 'user_email';

export const ENCRYPT_SECRET_KEY = process.env.REACT_APP_ENCRPT_KEY || 'unsafe_secret_key';