import { useState } from 'react';
import Burger from './Burger';
import ControlsGroup from './control/ControlsGroup';
import { TYPES } from './ingredient/Ingredient';

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

  return (
    <div className="container">
      <Burger ingredients={ingredients} />
      <ControlsGroup
        ingredients={ingredients}
        add={addIngredient}
        remove={removeIngredient}
        price={price}
      />
    </div>
  );
};
export default BurgerContainer;
