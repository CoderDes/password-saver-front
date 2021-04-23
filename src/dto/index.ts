export class GetUserInfoDto {
	email: string;
	accessToken: string | null;
}

export class RecordSaveDto {
	title: string;
	password: string;
	userId: string;
	accessToken: string | null;
}

export class RecordUpdateDto {
	recordId: string;
	newPassword: string;
}

export class RecordDeleteDto {
	id: string;
	accessToken: string | null;
}