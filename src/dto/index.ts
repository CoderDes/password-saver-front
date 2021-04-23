export class GetUserInfoDto {
	email: string;
	accessToken: string;
}

export class RecordSaveDto {
	title: string;
	password: string;
	userId: string;
	accessToken: string | null;
}