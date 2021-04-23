import { 
	API_URI,
	LOGIN_URI,
	REGISTER_URI,
	RECORD_URI,
} from '../constants/index';
import { IAuth } from '../interfaces/index';
import { GetUserInfoDto, RecordSaveDto } from '../dto/index';
import axios, { AxiosResponse } from 'axios';

export class Api {
	async login(params: IAuth): Promise<AxiosResponse<any>> {
		return await axios.post(LOGIN_URI, params);
	}

	async register(params: IAuth): Promise<AxiosResponse> {
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

	async saveRecord(dto: RecordSaveDto): Promise<AxiosResponse<any>> {
		const { title, password, userId, accessToken } = dto;

		return await axios.post(`${RECORD_URI}/new`, {title, password, userId}, {
			headers: {
				'Authorization': `Bearer ${accessToken}`,
			}
		});
	}
}

export default new Api();