import Button from '../common/Button';
import Flex from '../common/Flex';
const ButtonAuth = ({ authState, formId, onSwitch }) => {
  const switchLabel = authState ? 'Wanna build ?' : 'Getting stated';

  return (
    <Flex className="justify-between">
      <Button onClick={onSwitch} reversed>
        {switchLabel}
      </Button>

      <Button form={formId} color="primary-dark">
        Submit
      </Button>
    </Flex>
  );
};

export default ButtonAuth;
