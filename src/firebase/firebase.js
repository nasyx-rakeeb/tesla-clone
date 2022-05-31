 import firebase from 'firebase';
 
  const firebaseConfig = {
      apiKey: 'AIzaSyBpwvZWS26oHL_5qLsq34o0KJjhI64pym4',
      authDomain: "tesla-clone-authentication.firebaseapp.com",
      projectId: "tesla-clone-authentication",
      storageBucket: "tesla-clone-authentication.appspot.com",
      messagingSenderId: "113826700844",
      appId: "1:113826700844:web:f5ae3b47eb57e1ff55bb89"
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export const auth = firebaseApp.auth();
