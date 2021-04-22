import { 
	AuthParams,
	API_URI,
	LOGIN_URI,
	REGISTER_URI,
} from './constants';
import { GetUserInfoDto } from './dto';
import axios, { AxiosResponse } from 'axios';

export class Api {
	async login(params: AuthParams): Promise<AxiosResponse<any>> {
		return await axios.post(LOGIN_URI, params);
	}

	async register(params: AuthParams): Promise<AxiosResponse> {
		return await axios.post(REGISTER_URI, params);
	}

	async getUserInfo(dto: GetUserInfoDto): Promise<AxiosResponse<any>> {
		const { email, accessToken } = dto;
		return await axios.get(`${API_URI}/user/${email}/get-info`, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			}
		});
	}
}

export default new Api();