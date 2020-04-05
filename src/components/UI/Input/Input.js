import React from 'react';

import InputStyle from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let classInput = [InputStyle.InputElement]
    let errorMessage = null
    if (props.invalid && props.shouldValidation && props.touched) {
        classInput.push(InputStyle.Invalid)
        errorMessage = <p className={InputStyle.ValidationError}>
            {props.shouldValidation.errorMessage || ""}
        </p>;
    }
    let classInputText = classInput.join(" ")
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                onChange={props.onChange}
                className={classInputText}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                onChange={props.onChange}
                className={classInputText}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = <select
                onChange={props.onChange}
                className={classInputText}
                value={props.value}>
                {props.elementConfig.options.map(o => (
                    <option value={o.value} key={o.value}>
                        {o.displayValue}
                    </option>
                ))}
            </select>
            break;
        default:
            inputElement = <input
                onChange={props.onChange}
                className={classInputText}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={InputStyle.Input}>
            <label className={InputStyle.Label}>{props.label}</label>
            {inputElement}
            {errorMessage}
        </div>
    );

};

export default input;