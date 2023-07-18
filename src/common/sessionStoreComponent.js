import SecureStorage from 'secure-web-storage';
import CommonConfig from './commonConfig';
var CryptoJS = require("crypto-js");
var SECRET_KEY = '8cfLJmCNUVFZkLcmT916tA9n91eAUepfB2';

var secureStorage = '';
if (typeof window !== "undefined") {
    secureStorage = new SecureStorage(window.sessionStorage, {
        hash: function hash(key) {
            key = CryptoJS.SHA256(key, SECRET_KEY);
            return key.toString();
        },
        encrypt: function encrypt(data) {
            data = CryptoJS.AES.encrypt(data, SECRET_KEY);
            data = data.toString();
            return data;
        },
        decrypt: function decrypt(data) {
            data = CryptoJS.AES.decrypt(data, SECRET_KEY);
            data = data.toString(CryptoJS.enc.Utf8);
            return data;
        }
    })
}

export class sessionStore {
    storeSecureData(name, data) {
        secureStorage.setItem(name, data);
    }

    returnSessionToken() {
        return secureStorage.getItem(CommonConfig.SESSION_TOKEN);
    }

    returnDateFormat() {
        let dateFormat = !!secureStorage.getItem(CommonConfig.SESSION_DATE_FORMAT) ? secureStorage.getItem(CommonConfig.SESSION_DATE_FORMAT) : CommonConfig?.DEFAULT_DATE_FORMAT;
        return dateFormat;
    }
}

export default sessionStore;