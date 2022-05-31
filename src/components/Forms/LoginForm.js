import { useRef, useState } from 'react';

import Button from '../UI/Button';
import './Form.css';

const LoginForm = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        email: true,
        password: true,
    })
    const emailRef = useRef();
    const passwordRef = useRef();


    const formSubmitHandler = (e) => {
        e.preventDefault();
        const enteredEmail = emailRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();

        const enteredEmailIsValid = enteredEmail.length > 9;
        const enteredPasswordIsValid = enteredPassword.length > 6;

        setFormInputsValidity({
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid,
        });
        const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

        if (!formIsValid) {
            return
        }

        props.onSignIn({ email: enteredEmail, password: enteredPassword });
    }

    const emailClasses = `${formInputsValidity.email ? '' : 'invalid'}`
    const passwordClasses = `${formInputsValidity.password ? '' : 'invalid'}`

    console.log(emailClasses)
    return (
        <form className='form' onSubmit={formSubmitHandler}>
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                type='text'
                ref={emailRef}
                className={emailClasses}
            />
            {formInputsValidity.email === false ? <p className="error_message">Enter valid email id</p> : ''}
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                ref={passwordRef}
                className={passwordClasses}
            />
            {formInputsValidity.password === false ? <p className="error_message">Enter valid password</p> : ''}
            <Button name='Sign In' type='button' onClick="submit" className="primary" >SIGN IN</Button>
        </form>
    )
}
export default LoginForm