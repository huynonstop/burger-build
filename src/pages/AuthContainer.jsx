import { useId, useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import ButtonAuth from '../components/auth/ButtonAuth';
import Container from '../components/common/Container';
import Flex from '../components/common/Flex';
import Logo from '../components/nav/Logo';
import { API_URL } from '../config/url';

const AuthContainer = () => {
  const formId = useId();
  const [authState, setAuthState] = useState(true);
  const title = authState
    ? 'Sign in your account'
    : 'Sign up a new account';
  const submitForm = async ({ email, password }) => {
    const formData = {
      email,
      password,
      returnSecureToken: true,
    };
    const res = await fetch(API_URL.signUp, {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const resData = await res.json();
    console.log(resData);
  };
  return (
    <Container>
      <Flex
        className="px-3 py-2 gap-1 border-default border-radius-1 min-w-400px"
        column
      >
        <Flex className="justify-center items-center gap-1-2">
          <Logo mini />
          <h3>BuildBurger</h3>
        </Flex>
        <h5>{title}</h5>
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
