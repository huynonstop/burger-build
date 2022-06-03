import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthForm from '../components/auth/AuthForm';
import ButtonAuth from '../components/auth/ButtonAuth';
import Container from '../components/common/Container';
import Flex from '../components/common/Flex';
import Logo from '../components/nav/Logo';
import { API_URL } from '../config/url';
import { authActions } from '../features/auth';

const authMessage = (authState) =>
  authState
    ? {
        authURL: API_URL.signIn,
        authenticating: 'Signing In',
        success: 'Successfully Signed In 👌',
      }
    : {
        authURL: API_URL.signUp,
        authenticating: 'Signing Up',
        success: 'Successfully Signed Up 👌',
      };

const AuthContainer = () => {
  const formId = useId();
  const [authState, setAuthState] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state || {};
  const successRedirect = locationState.redirect || '/';
  const dispatch = useDispatch();

  const submitForm = async ({ email, password }) => {
    const formData = {
      email,
      password,
      returnSecureToken: true,
    };
    const { authURL, authenticating, success } =
      authMessage(authState);
    const toastId = toast.loading(authenticating);
    try {
      const res = await fetch(authURL, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      const resData = await res.json();
      if (res.status !== 200) {
        throw resData;
      }
      toast.update(toastId, {
        render: success,
        isLoading: false,
        type: 'success',
      });
      const expiresInMS = Number(resData.expiresIn) * 1000;
      const expiresTime = Date.now() + expiresInMS;
      dispatch(
        authActions.login({
          user: {
            id: resData.localId,
          },
          idToken: resData.idToken,
          expiresTime,
          expiresInMS,
        }),
      );
      navigate(successRedirect);
    } catch (err) {
      console.log(err);
      toast.update(toastId, {
        render: err.message || 'Something went wrong 🤯',
        isLoading: false,
        type: 'error',
      });
    } finally {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 2000);
    }
  };

  return (
    <Container>
      <Flex
        className="px-3 py-2 gap-1 border-default border-radius-1 min-w-400px"
        column
      >
        <Logo className="self-center" mini label="BuildBurger" />
        <h4>
          {authState
            ? 'Sign in your account'
            : 'Sign up a new account'}
        </h4>
        <AuthForm
          authDataHandler={submitForm}
          authState={authState}
          id={formId}
        />
        <ButtonAuth
          onSwitch={() => setAuthState((pre) => !pre)}
          authState={authState}
          formId={formId}
        ></ButtonAuth>
      </Flex>
    </Container>
  );
};

export default AuthContainer;
