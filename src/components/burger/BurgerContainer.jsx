import { useState } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, TYPES, API_URL } from '../../config/naming';
import Container from '../common/Container';
import Modal from '../common/Modal';
import Summary from '../summary/Summary';
import Burger from './Burger';
import ControlsGroup from './control/ControlsGroup';

const initIngredients = {
  [TYPES.meat]: 0,
  [TYPES.cheese]: 0,
  [TYPES.salad]: 0,
  [TYPES.bacon]: 0,
};

const PRICE = {
  [TYPES.meat]: 2,
  [TYPES.cheese]: 1,
  [TYPES.salad]: 0.5,
  [TYPES.bacon]: 3,
};

const BurgerContainer = () => {
  const [ingredients, setIngredients] = useState(initIngredients);
  const [price, setPrice] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const resetIngredients = () => {
    setIngredients(initIngredients);
    setPrice(0);
  };

  const addIngredient = (type) => {
    setIngredients((pre) => {
      const newIngredients = { ...pre };
      newIngredients[type] += 1;
      return newIngredients;
    });
    setPrice((pre) => pre + PRICE[type]);
  };

  const removeIngredient = (type) => {
    if (ingredients[type] === 0) {
      return;
    }
    setIngredients((pre) => {
      const newIngredients = { ...pre };
      newIngredients[type] -= 1;
      return newIngredients;
    });
    setPrice((pre) => pre - PRICE[type]);
  };

  const setSummary = (status) => {
    setShowSummary(status);
  };

  const confirmSummary = async () => {
    const order = {
      ingredients,
      price,
      user: {
        id: 1,
      },
    };
    toast.promise(
      fetch(`${BASE_URL}/${API_URL.orders}`, {
        method: 'POST',
        body: JSON.stringify(order),
      }).finally(() => {
        setSummary(false);
        resetIngredients();
      }),
      {
        pending: 'Sending order data',
        success: 'Successfully placed the order 👌',
        error: 'Something went wrong 🤯',
      },
    );
  };

  const cancelSummary = () => {
    setSummary(false);
  };

  return (
    <Container>
      <Modal show={showSummary} close={() => setSummary(false)}>
        <Summary
          price={price}
          ingredients={ingredients}
          cancel={cancelSummary}
          confirm={confirmSummary}
        />
      </Modal>
      <ControlsGroup
        ingredients={ingredients}
        add={addIngredient}
        remove={removeIngredient}
        price={price}
        showSummaryModal={() => setSummary(true)}
      />
      <Burger ingredients={ingredients} />
    </Container>
  );
};
export default BurgerContainer;
