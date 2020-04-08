/* eslint-disable no-useless-escape */
export const checkValidity = (value, rules) => {
    let isValid = true

    if (!rules) {
        return isValid
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (rules.minLegth) {
        isValid = value.length >= rules.minLegth && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    if (rules.isEmail) {
        const pattern = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        isValid = pattern.test(value) && isValid
    }
    if (rules.isNumeric) {
        const pattern = /^\d+$/
        isValid = pattern.test(value) && isValid
    }
    return isValid
}
export const inputSetup = (elementType, elementConfig, validation = {}, value = "") => ({
    elementType: elementType,
    elementConfig: elementConfig,
    value: value,
    validation: validation,
    valid: (Object.keys(validation).length === 0 && validation.constructor === Object) ? true : false,
    touched: false
})