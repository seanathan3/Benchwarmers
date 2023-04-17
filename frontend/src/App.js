import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
<<<<<<< HEAD
import UserProfile from "./components/UserProfile/UserProfile";
=======
import { getCurrentUser } from "./store/session";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
>>>>>>> 443a5489db4a62df08f1c19b9a82be5fef331ce6

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  return (
    <>
<<<<<<< HEAD
    <NavBar />
    <LoginForm />
    <SignupForm />
    <Route path="/">
      <Splash />
    </Route>  
    <Route path="/user-profile">
      <UserProfile />
    </Route>
=======
      <NavBar />
      <LoginForm />
      <SignupForm />
      <Route path="/">
        <Splash />
      </Route>
>>>>>>> 443a5489db4a62df08f1c19b9a82be5fef331ce6
    </>
  );
}

export default App;
