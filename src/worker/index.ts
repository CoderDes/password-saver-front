import { expose } from 'comlink';
import crypter from '../service/crypter';

const exports = {
	decryptPassword: crypter.decrypt,
	encryptPassword: crypter.encrypt,
};

export type CrypterWorker = typeof exports;

expose(exports);