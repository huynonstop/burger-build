import { useState } from 'react';
import useFormRef from '../../hooks/useFormRef';
import Flex from '../common/Flex';
import Input from '../common/Input';

const authDataValidator = ({ email, password }) => {
  if (!email) return false;
  if (!password) return false;
  return true;
};

const AuthForm = ({ authState, id, authDataHandler }) => {
  const [formRef, { createInputRef, getFormData }] = useFormRef();
  const orderSubmit = (e) => {
    e.preventDefault();
    const authData = getFormData();
    if (!authDataValidator(authData)) return;
    authDataHandler(authData);
  };

  return (
    <Flex
      className="gap-1"
      onSubmit={orderSubmit}
      column
      tag="form"
      id={id}
    >
      <Input
        id={id}
        ref={createInputRef('email')}
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <Input
        id={id}
        ref={createInputRef('password')}
        type="password"
        name="password"
        minLength={6}
        info={authState ? ' ' : '*Minium 6 characters'}
        placeholder="Your password"
        required
      />
    </Flex>
  );
};

export default AuthForm;
