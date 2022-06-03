import { useState } from 'react';

import Container from '../components/common/Container';
import Modal from '../components/common/Modal';
import BurgerSummary from '../components/burger/BurgerSummary';
import Burger from '../components/burger/Burger';
import ControlsGroup from '../components/burger/control/ControlsGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addIngredients,
  removeIngredients,
  resetIngredients,
} from '../features/actions';

const BurgerContainer = () => {
  const price = useSelector((store) => store.price);
  const ingredients = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  const addIngredient = (type) => {
    dispatch(addIngredients({ type }));
  };

  const removeIngredient = (type) => {
    if (ingredients[type] === 0) {
      return;
    }
    dispatch(removeIngredients({ type }));
  };

  const resetIngredient = () => {
    dispatch(resetIngredients());
  };

  const [showSummary, setShowSummary] = useState(false);

  const setSummary = (status) => {
    setShowSummary(status);
  };

  const cancelSummary = () => {
    setSummary(false);
  };

  const navigate = useNavigate();

  const confirmSummary = async () => {
    navigate('/check-out');
  };

  return (
    <Container>
      <Modal show={showSummary} onClose={() => setSummary(false)}>
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
        reset={resetIngredient}
        price={price}
        showSummaryModal={() => setSummary(true)}
      />
      <Burger ingredients={ingredients} remove={removeIngredient} />
    </Container>
  );
};
export default BurgerContainer;
