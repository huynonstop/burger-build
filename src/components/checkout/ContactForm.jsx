import useFormRef from '../../hooks/useFormRef';
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

const ContactForm = ({ id, contactDataHandler }) => {
  const [formRef, { createInputRef, getFormData }] = useFormRef();
  const orderSubmit = (e) => {
    e.preventDefault();
    const contactData = getFormData();
    if (!contactDataValidator(contactData)) return;
    contactDataHandler(contactData);
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
        ref={createInputRef('name')}
        label="Full name:"
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
      <Input
        id={id}
        ref={createInputRef('email')}
        label="Email:"
        type="email"
        name="email"
        placeholder="Your email"
        required
      />
      <Input
        id={id}
        ref={createInputRef('address')}
        label="Address:"
        type="text"
        name="address"
        placeholder="Your address"
        required
      />
      <Input
        id={id}
        ref={createInputRef('postal')}
        label="Postal code:"
        type="text"
        name="postal"
        placeholder="Your postal code"
        required
      />
      <Input
        id={id}
        ref={createInputRef('deliveryMethod')}
        label="Delivery method:"
        tag="select"
        name="method"
        inline
        defaultValue="cheapest"
      >
        <option value="cheapest">Cheapest</option>
        <option value="fastest">Fastest</option>
      </Input>
    </Flex>
  );
};

export default ContactForm;
