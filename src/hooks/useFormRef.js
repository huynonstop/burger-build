import { useRef } from 'react';

const useFormRef = () => {
  const formRef = useRef({});
  const createInputRef = (field) => (el) => {
    formRef.current[field] = el;
  };
  const getValue = (field) => {
    return formRef.current[field].value;
  };
  const getFormData = () => {
    return Object.keys(formRef.current).reduce((pre, field) => {
      pre[field] = getValue(field);
      return pre;
    }, {});
  };
  return [formRef, { createInputRef, getValue, getFormData }];
};

export default useFormRef;
