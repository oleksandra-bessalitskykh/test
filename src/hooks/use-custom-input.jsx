import { useState } from 'react';

const useCustomInput = (validateValue, initialState = '') => {
    const [enteredValue, setEnteredValue] = useState(initialState);
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        hasError,
        reset,
        inputBlurHandler,
        valueChangeHandler,
        valueIsValid,
        setEnteredValue
    };
};

export default useCustomInput;
