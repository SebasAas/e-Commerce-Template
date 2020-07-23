import React, { useEffect } from 'react';
import Routes from './routes/Routes'
import { useStateValue } from './context/StateProvider';
import { auth } from './server/firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          {
            type: "SET_USER",
            user: authUser
          }
        );
      } else {
        dispatch(
          {
            type: "SET_USER",
            user: null
          }
        );
      }
    })

    return () => {
      console.log("Chequeado");
      unsuscribe()
    };
  }, [])

  console.log("User is", user)

  return (
    <Routes />
  );
}

export default App;
