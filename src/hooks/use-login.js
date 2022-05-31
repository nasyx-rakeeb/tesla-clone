import { auth } from '../firebase/firebase';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';


const useLogin = (setIsLoading) => {
    const dispatch = useDispatch();

    const firebaseLogin = (email, password) => {
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {

            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }))
        }).catch(err => {
            setIsLoading(state => !state);
            alert(`Something went wrong! ${err.message}`)
        });
    }

    return firebaseLogin;
}

export default useLogin;
