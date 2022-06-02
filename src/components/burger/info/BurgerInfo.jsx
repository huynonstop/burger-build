import { LABEL } from '../../../config/naming';
import { useClasses } from '../../../hooks/useClasses';
import Flex from '../../common/Flex';
import { IngredientsGroup } from './info.module.css';
import IngredientInfo from './IngredientInfo';

const BurgerInfo = ({
  price,
  ingredients,
  ingredientsGroupClass = 'items-center',
}) => {
  const ingredientsList = Object.keys(ingredients);
  return (
    <Flex column className="gap-1">
      <div
        className={useClasses([
          IngredientsGroup,
          ingredientsGroupClass,
        ])}
      >
        {ingredientsList.map((type) => (
          <IngredientInfo
            key={type}
            count={ingredients[type]}
            label={LABEL[type]}
          />
        ))}
      </div>
      <h3 className="font-5-4">
        <strong>Total price: {price.toFixed(2)}$</strong>
      </h3>
    </Flex>
  );
};

export default BurgerInfo;
