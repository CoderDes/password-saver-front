export interface IRecord {
	_id: string;
	title: string;
	password: string;
	userId: string;
	createdAt: string;
}

export interface IUser {
	_id: string;
	email: string;
	records: IRecord[],
}

export interface IRootState {
	userData: IUser;
}

export interface IAuth {
	email: string;
	password: string;
}