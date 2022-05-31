import { auth } from '../firebase/firebase';
import { login } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const useLogin = (setIsLoading) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const firebaseSignup = (firstName, email, password) => {
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({ displayName: firstName }).then(() => {

                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: firstName
                }))
                history.push("/teslaaccount")
            })
        }).catch(err => {
            setIsLoading(state => !state);
            alert(`Something went wrong! ${err.message}`)
        });
    }

    return firebaseSignup;
}

export default useLogin;
