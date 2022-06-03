import { useId } from 'react';
import { useOutletContext } from 'react-router-dom';
import ContactForm from '../components/checkout/ContactForm';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import Flex from '../components/common/Flex';
import { useScrollRef } from '../hooks/useScrollRef';

const ContactContainer = () => {
  const { confirmOrder } = useOutletContext();
  const formId = useId();
  return (
    <Container>
      <Flex
        className="box-shadow-card p-3 border-radius-1 gap-1"
        column
        ref={useScrollRef}
      >
        <h2>Provide your contact data</h2>
        <ContactForm id={formId} contactDataHandler={confirmOrder} />
        <Button color="primary" type="submit" form={formId}>
          Order
        </Button>
      </Flex>
    </Container>
  );
};

export default ContactContainer;
