import React from 'react';
import './Firebase'
import './App.css';
import { auth } from './Firebase/index';
import { createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { hover } from '@testing-library/user-event/dist/hover';

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() =>{

    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user.email[0].toUpperCase)
      if (user){
        setUser(user)
      };
    })
  },[])
  
  function register() {
    console.log('register');
    createUserWithEmailAndPassword(auth, 'email@gmail.com', 'test123')
    .then ((user) => {
      console.log(user)
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  function login(){
    signInWithEmailAndPassword(auth, 'email@gmail.com', 'test123')
    .then (({user}) => {
      console.log(user);
      setUser(user)
    })
    .catch ((error) => {
      console.log(error);
    })
  }

  function logout(){
    signOut(auth);
    setUser({})
  }


  return (
    <nav>
      
        <div className="App">
          <button onClick={register}>Register</button>
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
           {loading ? 'loading...' : user.email}
       </div>
    </nav>
    

  );
}

export default App;
