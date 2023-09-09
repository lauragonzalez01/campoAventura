import * as CryptoJS from 'crypto-js';

import { environment } from 'src/environments/environment';

export class Encryption {
  private static readonly token: string = environment.tokenBase.concat(environment.tokenComplement);

  static encryptData(data) {
    return btoa(CryptoJS.AES.encrypt(JSON.stringify(data), Encryption.token).toString());
  }

  static decryptData(data) {
    data = atob(data);
    const bytes = CryptoJS.AES.decrypt(data, Encryption.token);
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return data;
  }

  static sha256(value: string): string {
    return CryptoJS.SHA256(value);
  }
}
