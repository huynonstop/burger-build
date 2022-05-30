import { useOutletContext } from 'react-router-dom';
import Button from '../common/Button';
import Flex from '../common/Flex';
import Input from '../common/Input';

const ContactData = ({}) => {
  const { confirmOrder } = useOutletContext();
  const orderSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name: 'Huy',
      email: 'huy@gmail.com',
      address: '26',
      postal: '700000',
    };
    confirmOrder(contactData);
  };
  return (
    <Flex
      className="box-shadow-card p-3 border-radius-1 gap-1"
      column
    >
      <h2>Provide your contact data</h2>
      <Flex className="gap-1" column tag="form">
        <Input
          label="Full name:"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <Input
          label="Email:"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          label="Address:"
          type="text"
          name="address"
          placeholder="Your address"
        />
        <Input
          label="Postal code:"
          type="text"
          name="postal"
          placeholder="Your postal code"
        />
      </Flex>
      <Button onClick={orderSubmit} color="primary">
        Order
      </Button>
    </Flex>
  );
};

export default ContactData;
