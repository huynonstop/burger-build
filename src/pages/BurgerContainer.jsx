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
import {
  ingredientsActions,
  ingredientsReducer,
} from '../features/ingredients';

const BurgerContainer = () => {
  const price = useSelector((store) => store.price);
  const ingredients = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  const addIngredient = (type) => {
    dispatch(addIngredients({ type }));
  };

  const removeIngredient = (ingredient) => {
    dispatch(removeIngredients(ingredient));
  };

  const resetIngredient = () => {
    dispatch(resetIngredients());
  };

  const moveIngredientUp = (index) => {
    console.log(index);
    dispatch(ingredientsActions.moveUp({ index }));
  };

  const moveIngredientDown = (index) => {
    console.log(index);
    dispatch(ingredientsActions.moveDown({ index }));
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
      <Burger
        clickAble={true}
        moveAble={true}
        moveUp={moveIngredientUp}
        moveDown={moveIngredientDown}
        ingredients={ingredients}
        remove={removeIngredient}
      />
    </Container>
  );
};
export default BurgerContainer;
