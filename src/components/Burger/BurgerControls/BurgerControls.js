import React from "react";
import PropTypes from "prop-types";
import BurgerControlsStyle from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const BurgerControls = props => {
    const isPurchasable = props.controls.reduce((isPurchasable, el) => {
        return isPurchasable || !el.disabled
    }, false)
    return (
        <div className={BurgerControlsStyle.BurgerControl}>
            <p>Current price: <strong>{props.price}</strong></p>
            {props.controls.map(ctrl => (
                <BurgerControl
                    key={ctrl.type}
                    control={ctrl.type}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={ctrl.disabled}
                />
            ))}
            <button
                className={BurgerControlsStyle.OrderButton}
                disabled={!isPurchasable}
                onClick={props.order}>{props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}</button>
        </div>
    );
};

BurgerControls.propTypes = {
    controls: PropTypes.array,
    addIngredient: PropTypes.func,
    removeIngredient: PropTypes.func,
    order: PropTypes.func
};

export default BurgerControls;
