import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable()
export class CryptoServiceService {
  constructor() {}

  encrypt(data, key) {
    return crypto.AES.encrypt(JSON.stringify(data), key);
  }

  decrypt(ciphertext, key) {
    var bytes  = crypto.AES.decrypt(ciphertext.toString(), key);
    return JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
}
