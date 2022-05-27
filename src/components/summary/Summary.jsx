import { LABEL } from '../../config/naming';
import Button from '../common/Button';

const Summary = ({ ingredients, cancel, confirm, price }) => {
  const types = Object.keys(ingredients);
  return (
    <div>
      <h3>Confirm your burger</h3>
      <p>Your burger include the following ingredients:</p>
      <ul>
        {types.map((type) => {
          return (
            <li key={type}>
              <span>{LABEL[type]}</span>:{ingredients[type]}
            </li>
          );
        })}
      </ul>
      <p>
        <strong> Total price: {price}$</strong>
      </p>
      <div className="flex flex-end gap-1">
        <Button color="danger" onClick={cancel}>
          Cancel
        </Button>
        <Button color="confirm" onClick={confirm}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
