import Cryptr from 'cryptr';
import { ENCRYPT_SECRET_KEY } from '../constants/index';

export default new Cryptr(ENCRYPT_SECRET_KEY);