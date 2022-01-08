import crypto from 'crypto-js';
import Cookies from 'js-cookie';

export default Cookies.get(process.env.REACT_APP_COOKIES_KEY) &&
  crypto.AES.decrypt(
    Cookies.get(process.env.REACT_APP_COOKIES_KEY),
    process.env.REACT_APP_SECRET_KEY.toString()
  ).toString(crypto.enc.Utf8);
