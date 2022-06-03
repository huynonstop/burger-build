import { useSelector } from 'react-redux';
import { API_URL } from '../config/url';
import { getExpiresTime } from '../utils/localStorage';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth);
  const isAuth = auth.user && auth.idToken;
  const checkAuthToken = async () => {
    try {
      const res = await fetch(API_URL.getUser, {
        method: 'POST',
        body: JSON.stringify({
          idToken: auth.idToken,
        }),
      });
      const resData = await res.json();
      if (res.status !== 200) {
        throw resData;
      }
      return auth.idToken;
    } catch (err) {
      return null;
    }
  };
  const checkExpiresToken = () => {
    const expiresTime = getExpiresTime();
    if (Date.now() > expiresTime) {
      return [0, expiresTime];
    }
    return [expiresTime - Date.now(), expiresTime];
  };
  return { auth, isAuth, checkAuthToken, checkExpiresToken };
};
