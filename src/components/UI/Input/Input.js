import React from 'react';

import InputStyle from './Input.module.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                onChange={props.onChange}
                className={InputStyle.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                onChange={props.onChange}
                className={InputStyle.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = <select
                onChange={props.onChange}
                className={InputStyle.InputElement}
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
                className={InputStyle.InputElement}
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={InputStyle.Input}>
            <label className={InputStyle.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;