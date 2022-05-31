import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import './App.css';
import { auth } from './firebase/firebase';
import Spinner from './components/UI/Spinner';
import HomePage from './components/Home/index';
const LoginPage = React.lazy(() => import('./components/LoginPage/index'));
const SignupPage = React.lazy(() => import('./components/SignupPage/index'));
const AccountPage = React.lazy(() => import('./components/AccountPage/index'));


function App() {
  const { user } = useSelector(state => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        auth.signOut().then(() => {
          dispatch(logout())
        })
      }
    })
  }, [dispatch])


  return (
    <div className="App">
      <Suspense fallback={<div className='centered'><Spinner /></div>}>

        <Switch>
          <Route path="/" exact>
            <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route exact path="/login">
            {user && <Redirect to="/teslaaccount" />}
            {!user && <LoginPage />}
          </Route>

          <Route exact path="/signup">
            {user && <Redirect to="/teslaaccount" />}
            {!user && <SignupPage />}
          </Route>

          <Route exact path="/teslaaccount">
            {user && <AccountPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            {!user && <Redirect to="/login" />}

          </Route>

        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
