import { LABEL } from '../../config/naming';
import Button from '../common/Button';
import Flex from '../common/Flex';

const BurgerSummary = ({ ingredients, cancel, confirm, price }) => {
  const summary = ingredients.reduce((pre, ingredient) => {
    const preCount = pre[ingredient.type] || 0;
    pre[ingredient.type] = preCount + 1;
    return pre;
  }, {});

  const types = Object.keys(summary);
  return (
    <Flex column className="gap-1-2">
      <h3>Confirm your burger</h3>
      <p>Your burger include the following ingredients:</p>
      <ul>
        {types.map((type) => {
          return (
            <li key={type}>
              <span>{LABEL[type]}</span>: {summary[type]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong> Total price: {price}$</strong>
      </p>
      <Flex className="justify-between gap-1">
        <Button color="danger" onClick={cancel}>
          Cancel
        </Button>
        <Button color="confirm" onClick={confirm}>
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
};

export default BurgerSummary;
