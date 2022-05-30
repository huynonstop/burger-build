import { useState } from 'react';
import { TYPES } from '../config/naming';

import Container from '../components/common/Container';
import Modal from '../components/common/Modal';
import BurgerSummary from '../components/burger/BurgerSummary';
import Burger from '../components/burger/Burger';
import ControlsGroup from '../components/burger/control/ControlsGroup';
import { createSearchParams, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
    navigate({
      pathname: '/check-out',
      search: createSearchParams({
        ...ingredients,
        price,
      }).toString(),
    });
  };

  const cancelSummary = () => {
    setSummary(false);
  };

  return (
    <Container>
      <Modal show={showSummary} close={() => setSummary(false)}>
        <BurgerSummary
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
