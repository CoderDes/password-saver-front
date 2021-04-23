export class AccessTokenDto {
	accessToken: string | null;
}

export class GetUserInfoDto extends AccessTokenDto {
	email: string;
}

export class RecordSaveDto extends AccessTokenDto {
	title: string;
	password: string;
	userId: string;
}

export class RecordUpdateDto extends AccessTokenDto {
	recordId: string;
	newPassword: string;
}

export class RecordDeleteDto extends AccessTokenDto {
	id: string;
}