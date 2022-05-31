import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/use-login';
import LoginForm from '../Forms/LoginForm';
import Button from '../UI/Button';
import Header from '../UI/Header'
import Spinner from '../UI/Spinner.js';
import "./Login.css";


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const firebaseLogin = useLogin(setIsLoading);
    const signInHandler = (userData) => {
        setIsLoading(true);
        firebaseLogin(userData.email, userData.password);

    }
    return (
        <div className="login">
            {isLoading && <Spinner animation="border" />}
            <Header />
            <div className="login__info">
                <h1>Sign In</h1>
                <LoginForm onSignIn={signInHandler} />
                <div className="login__divider">
                    <span>OR</span>
                </div>
                <Link to="/signup">
                    <Button className="secondary">Create Account</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;