import React, { useState } from 'react'
import useSignup from '../../hooks/use-signup';
import { Link } from 'react-router-dom';
import Spinner from '../UI/Spinner.js';
import Header from '../UI/Header';
import SignupForm from '../Forms/SignupForm';
import Button from '../UI/Button';
import './Signup.css';


const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const firebaseSignup = useSignup(setIsLoading);

    const signUpHandler = ({ firstName, lastName, email, password }) => {
        setIsLoading(true);
        firebaseSignup(firstName, email, password);
    }
    return (
        <div className="signup">
            {isLoading && <Spinner animation="border" />}
            <Header />
            <div className="signup__info">
                <h1>Create Account</h1>
                <SignupForm onSignUp={signUpHandler} />
                <div className="signup__divider">
                    <span>OR</span>
                </div>
                <Link to="/login">
                    <Button className="secondary">Sign In</Button>
                </Link>
            </div>
        </div>
    )
}

export default Signup
