export const inputSetup = (elementType, elementConfig, validation = {}, value = "") => ({
    elementType: elementType,
    elementConfig: elementConfig,
    value: value,
    validation: validation,
    valid: (Object.keys(validation).length === 0 && validation.constructor === Object) ? true : false,
    touched: false
})