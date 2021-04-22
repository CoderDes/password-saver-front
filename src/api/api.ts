import { 
	AuthParams,
	LOGIN_URI,
	REGISTER_URI,
} from './constants';
import axios, { AxiosResponse } from 'axios';

export class Api {
	async login(params: AuthParams): Promise<AxiosResponse<any>> {
		return await axios.post(LOGIN_URI, params);
	}

	async register(params: AuthParams): Promise<AxiosResponse> {
		return await axios.post(REGISTER_URI, params);
	}
}

export default new Api();