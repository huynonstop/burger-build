import React from "react";
import PropTypes from "prop-types";
import BurgerIgredientStyle from "./BurgerIgredient.module.css";

const BurgerIgredient = props => {
    const ingredients = {
        "bread-bottom": <div className={BurgerIgredientStyle.BreadBottom}></div>,
        "bread-top": (
            <div className={BurgerIgredientStyle.BreadTop}>
                <div className={BurgerIgredientStyle.Seeds1}></div>
                <div className={BurgerIgredientStyle.Seeds2}></div>
            </div>
        ),
        meat: <div className={BurgerIgredientStyle.Meat}></div>,
        cheese: <div className={BurgerIgredientStyle.Cheese}></div>,
        salad: <div className={BurgerIgredientStyle.Salad}></div>,
        bacon: <div className={BurgerIgredientStyle.Bacon}></div>
    };
    const ingredient = ingredients[props.type] || null;
    return ingredient;
};

BurgerIgredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIgredient;
