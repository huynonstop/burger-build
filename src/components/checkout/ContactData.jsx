import { useId } from 'react';
import { useOutletContext } from 'react-router-dom';
import useFormRef from '../../hooks/useFormRef';
import Button from '../common/Button';
import Flex from '../common/Flex';
import Input from '../common/Input';

const contactDataValidator = ({
  name,
  email,
  address,
  postal,
  deliveryMethod,
}) => {
  if (!name) return false;
  if (!email) return false;
  if (!address) return false;
  if (!postal) return false;
  if (!deliveryMethod) return false;
  return true;
};

const ContactData = ({}) => {
  const { confirmOrder } = useOutletContext();
  const formId = useId();
  const [formRef, { createInputRef, getFormData }] = useFormRef();
  const orderSubmit = (e) => {
    e.preventDefault();
    const contactData = getFormData();
    if (!contactDataValidator(contactData)) return;
    confirmOrder(contactData);
  };
  return (
    <Flex
      className="box-shadow-card p-3 border-radius-1 gap-1"
      column
    >
      <h2>Provide your contact data</h2>
      <Flex
        className="gap-1"
        onSubmit={orderSubmit}
        column
        tag="form"
        id={formId}
      >
        <Input
          ref={createInputRef('name')}
          label="Full name:"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <Input
          ref={createInputRef('email')}
          label="Email:"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <Input
          ref={createInputRef('address')}
          label="Address:"
          type="text"
          name="address"
          placeholder="Your address"
          required
        />
        <Input
          ref={createInputRef('postal')}
          label="Postal code:"
          type="text"
          name="postal"
          placeholder="Your postal code"
          required
        />
        <Input
          ref={createInputRef('deliveryMethod')}
          label="Delivery method:"
          tag="select"
          inline
          defaultValue="cheapest"
        >
          <option value="cheapest">Cheapest</option>
          <option value="fastest">Fastest</option>
        </Input>
      </Flex>
      <Button color="primary" type="submit" form={formId}>
        Order
      </Button>
    </Flex>
  );
};

export default ContactData;
