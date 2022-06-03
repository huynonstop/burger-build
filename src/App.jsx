import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import './App.css';
import { authActions } from './features/auth';
import { useAuth } from './hooks/useAuth';

import Routes from './Routes';

function App() {
  const { auth, checkAuthToken, checkExpiresToken, isAuth } =
    useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    const tryAuth = async () => {
      if (!isAuth) {
        return;
      }
      const [expiresInMS, expiresTime] = checkExpiresToken();
      if (expiresInMS <= 0) {
        console.log('expiredToken');
        dispatch(authActions.logout());
        return;
      }
      const idToken = await checkAuthToken();
      if (!idToken) {
        console.log('invalidToken');
        dispatch(authActions.logout());
        return;
      }
      dispatch(
        authActions.login({
          user: auth.user,
          idToken: auth.idToken,
          expiresInMS,
          expiresTime,
        }),
      );
    };
    console.log('trigger try auth');
    tryAuth();
  }, []);
  return (
    <div className="App">
      <Routes />
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
