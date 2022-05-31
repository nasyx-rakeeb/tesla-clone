import { useRef, useState } from 'react';
import Button from '../UI/Button';
import './Form.css';

const SignupForm = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
    });

    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const enteredFirstName = firstNameRef.current.value.trim();
        const enteredLastName = lastNameRef.current.value.trim();
        const enteredEmail = emailRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();

        const enteredFirstNameIsValid = enteredFirstName.length > 2;
        const enteredLastNameIsValid = enteredLastName.length > 2;
        const enteredEmailIsValid = enteredEmail.length > 9;
        const enteredPasswordIsValid = enteredPassword.length > 6;

        setFormInputsValidity({
            firstName: enteredFirstNameIsValid,
            lastName: enteredLastNameIsValid,
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid,
        });

        const formIsValid = enteredEmailIsValid && enteredPasswordIsValid && enteredFirstNameIsValid && enteredLastNameIsValid;

        if (!formIsValid) {
            return
        }


        props.onSignUp({ firstName: enteredFirstName, lastName: enteredLastName, email: enteredEmail, password: enteredPassword });

    }

    const firstNameClasses = `${formInputsValidity.firstName ? '' : 'invalid'}`
    const lastNameClasses = `${formInputsValidity.lastName ? '' : 'invalid'}`
    const emailClasses = `${formInputsValidity.email ? '' : 'invalid'}`
    const passwordClasses = `${formInputsValidity.password ? '' : 'invalid'}`

    return (
        <form className='form' onSubmit={formSubmitHandler}>
            <label htmlFor='firstName'>First Name</label>
            <input
                id='firstName'
                type='name'
                className={firstNameClasses}
                ref={firstNameRef}
            />
            {formInputsValidity.firstName === false ? <p className="error_message">Invalid input</p> : ''}
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                type='name'
                className={lastNameClasses}
                ref={lastNameRef}
            />
            {formInputsValidity.lastName === false ? <p className="error_message">Invalid input</p> : ''}
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                type='email'
                className={emailClasses}
                ref={emailRef}
            />
            {formInputsValidity.email === false ? <p className="error_message">Enter valid email id</p> : ''}
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                className={passwordClasses}
                ref={passwordRef}
            />
            {formInputsValidity.password === false ? <p className="error_message">Enter valid password</p> : ''}
            <Button name='Sign In' type='button' onClick="submit" className="primary" >Create Account</Button>
        </form>
    )
}
export default SignupForm