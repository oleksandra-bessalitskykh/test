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

    const basicFormSubmissionHandler = event => {
        event.preventDefault();

        if (!enteredNameValueIsValid || enteredEmailValue  || enteredPhoneValue) {
            return;
        }

        resetEnteredNameInput();
        resetEnteredPhoneInput();
        resetEnteredEmailInput();
    };

    const nameInputClasses = enteredNameInputError ? 'custom-form__control--invalid' : 'custom-form__control';
    const phoneInputClasses = enteredPhoneInputError ? 'custom-form__control--invalid' : 'custom-form__control custom-form__control__phone';
    const emailInputClasses = enteredEmailInputError ? 'custom-form__control--invalid' : 'custom-form__control';

    return (
      <div className='custom-form-wrapper'>
        <form onInput={basicFormSubmissionHandler} className='custom-form'>
            <h2 className='custom-form__title'>Запишитесь <span className='custom-form__text'>бесплатно</span> и получите подарок</h2>
            <div className='custom-form__group'>
                <div className={nameInputClasses}>
                    <input
                        type='text'
                        id='name'
                        placeholder='Ваше имя и фамилия'
                        value={enteredNameValue}
                        onChange={enteredNameChangeHandler}
                        onBlur={enteredNameBlurHandler}
                    />
                    {enteredNameInputError && <p>Пожалуйста, введите действительные имя и фамилию.</p>}
                </div>
                <div className={phoneInputClasses}>
                    <PhoneInput
                        placeholder='Ваш номер телефона'
                        value={enteredPhoneValue}
                        onChange={enteredPhoneChangeHandler}
                        onBlur={enteredPhoneBlurHandler}
                    />
                    {enteredPhoneInputError && <p>Пожалуйста, введите действительный номер телефона.</p>}
                </div>
            </div>
            <div className={emailInputClasses}>
                <input
                    type='email'
                    id='name'
                    placeholder='Ваш email'
                    value={enteredEmailValue}
                    onChange={enteredEmailChangeHandler}
                    onBlur={enteredEmailBlurHandler}
                />
                {enteredEmailInputError && <p>Пожалуйста, введите действительную электронную почту.</p>}
            </div>
            <button className='custom-form__button' disabled={!formIsValid}>Записаться бесплатно</button>
            <p className='custom-form__description'>
                Нажимая на кнопку я согашаюсь с политикой конфидециальности
            </p>
        </form>
      </div>
    );
};

export default CustomForm;
