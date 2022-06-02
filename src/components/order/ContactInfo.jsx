import Flex from '../common/Flex';

const ContactInfo = ({
  name,
  email,
  address,
  postal,
  deliveryMethod,
}) => {
  return (
    <Flex column className="w-50 flex-0 gap-1">
      <Flex column className="gap-1-2">
        <p className="p-5px">
          <label>Name:</label> <span>{name}</span>
        </p>
        <p className="p-5px no-warp">
          <label>Email:</label> <span>{email}</span>
        </p>
        <p className="p-5px">
          <label>Address:</label> <span>{address}</span>
        </p>
        <p className="p-5px">
          <label>Postal code:</label> <span>{postal}</span>
        </p>
        <p className="p-5px">
          <label>Delivery:</label> <span>{deliveryMethod}</span>
        </p>
      </Flex>
    </Flex>
  );
};

export default ContactInfo;
