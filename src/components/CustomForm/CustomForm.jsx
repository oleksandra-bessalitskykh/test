import useCustomInput from '../../hooks/use-custom-input.jsx';
import PhoneInput from 'react-phone-number-input';
import './CustomForm.scss';
import 'react-phone-number-input/style.css'

const CustomForm = () => {
    const {
        value: enteredNameValue,
        hasError: enteredNameInputError,
        valueChangeHandler: enteredNameChangeHandler,
        inputBlurHandler: enteredNameBlurHandler,
        valueIsValid: enteredNameValueIsValid,
        reset: resetEnteredNameInput
    } = useCustomInput(value => value.trim() !== '');

    const {
        value: enteredPhoneValue,
        hasError: enteredPhoneInputError,
        inputBlurHandler: enteredPhoneBlurHandler,
        valueIsValid: enteredPhoneValueIsValid,
        reset: resetEnteredPhoneInput,
        setEnteredValue: enteredPhoneChangeHandler
    } = useCustomInput(value => !!value);

    const {
        value: enteredEmailValue,
        hasError: enteredEmailInputError,
        valueChangeHandler: enteredEmailChangeHandler,
        inputBlurHandler: enteredEmailBlurHandler,
        valueIsValid: enteredEmailValueIsValid,
        reset: resetEnteredEmailInput
    } = useCustomInput(value => value.includes('@'));

    let formIsValid = false;

    if (enteredNameValueIsValid && enteredPhoneValueIsValid && enteredEmailValueIsValid) {
        formIsValid = true;
    }

    const customFormSubmissionHandler = event => {
        event.preventDefault();

        fetch('http://localhost:9070', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: enteredNameValue,
                phone: enteredPhoneValue,
                email: enteredEmailValue,
            }),
        }).catch(() => {
            console.log('userdata', {
                name: enteredNameValue,
                phone: enteredPhoneValue,
                email: enteredEmailValue,
            });
        });

        resetEnteredNameInput();
        resetEnteredPhoneInput();
        resetEnteredEmailInput();
    };

    const nameInputClasses = enteredNameInputError ? 'custom-form__control--invalid' : 'custom-form__control';
    const phoneInputClasses = enteredPhoneInputError ? 'custom-form__control--invalid' : 'custom-form__control custom-form__control__phone';
    const emailInputClasses = enteredEmailInputError ? 'custom-form__control--invalid' : 'custom-form__control';

    return (
        <div className='custom-form-wrapper'>
            <form onSubmit={customFormSubmissionHandler} className='custom-form'>
                <h2 className='custom-form__title'>Sign up for <span className='custom-form__text'>free</span> and
                    get a gift</h2>
                <div className='custom-form__group'>
                    <div className={nameInputClasses}>
                        <input
                            type='text'
                            id='name'
                            placeholder='Name and Lastname'
                            value={enteredNameValue}
                            onChange={enteredNameChangeHandler}
                            onBlur={enteredNameBlurHandler}
                        />
                        {enteredNameInputError && <p>Please enter a valid data.</p>}
                    </div>
                    <div className={phoneInputClasses}>
                        <PhoneInput
                            placeholder='Number'
                            value={enteredPhoneValue}
                            onChange={enteredPhoneChangeHandler}
                            onBlur={enteredPhoneBlurHandler}
                        />
                        {enteredPhoneInputError && <p>Please enter a valid number.</p>}
                    </div>
                </div>
                <div className={emailInputClasses}>
                    <input
                        type='email'
                        id='name'
                        placeholder='Email'
                        value={enteredEmailValue}
                        onChange={enteredEmailChangeHandler}
                        onBlur={enteredEmailBlurHandler}
                    />
                    {enteredEmailInputError && <p>Please enter a valid email.</p>}
                </div>
                <button className='custom-form__button' type='submit' disabled={!formIsValid}>Sign up for free</button>
                <p className='custom-form__description'>
                    By clicking the button I agree to the privacy policy
                </p>
            </form>
        </div>
    );
};

export default CustomForm;
