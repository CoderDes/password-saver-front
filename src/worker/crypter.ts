import { wrap } from 'comlink';

async function decryptWorker(password: string) {
	const worker = new Worker('./index', {name: 'decrypt-worker', type: 'module'});
	const workerApi = wrap<import('./index').CrypterWorker>(worker);
	return await workerApi.decryptPassword(password);
}

async function encryptWorker(password: string) {
	const worker = new Worker('./index', {name: 'encrypt-worker', type: 'module'});
	const workerApi = wrap<import('./index').CrypterWorker>(worker);
	return await workerApi.encryptPassword(password);
}

export default {
	decryptWorker,
	encryptWorker,
}