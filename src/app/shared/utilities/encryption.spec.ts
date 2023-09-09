import * as CryptoJS from 'crypto-js';

import { Encryption } from './encryption';

describe('Encryption()', () => {
  it('encryptData and decryptData', () => {
    const id = '207431001224';
    const cifred = Encryption.encryptData(id);
    expect(Encryption.decryptData(cifred)).toBe(id);
  });

  it('decryptData when bytes.toString is null', () => {
    const id = '207431001224';
    const test = '';
    const data = 'testData';
    spyOn(CryptoJS.AES, 'decrypt').and.returnValue(test);
    expect(Encryption.decryptData(data)).toBe(atob(data));
  });


  it('should encrypt a value in SHA256', () => {
    const value = 'test';
    const sha256Spy = spyOn(CryptoJS, 'SHA256');

    Encryption.sha256(value);

    expect(sha256Spy).toHaveBeenCalledWith(value);
  });
});
