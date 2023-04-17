import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";
import UserProfile from "./components/UserProfile/UserProfile";
import { getCurrentUser } from "./store/session";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  return (
    <>
    <NavBar />
    <LoginForm />
    <SignupForm />
    <Route path="/">
      <Splash />
    </Route>  
    <Route path="/user-profile">
      <UserProfile />
    </Route>
    </>
  );
}

export default App;
