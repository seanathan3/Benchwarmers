import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/SessionForms/LoginForm";
import SignupForm from "./components/SessionForms/SignupForm";

function App() {
  return (
    <>
    <NavBar />
    <LoginForm />
    <SignupForm />
    <Route path="/">
      <Splash />
    </Route>  
    </>
  );
}

export default App;
