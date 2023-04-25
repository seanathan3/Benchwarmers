import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import NavBar from "./components/NavBar/NavBar";
import UserShowPage from "./components/UserProfile/UserShowPage";
import { getCurrentUser } from "./store/session";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import GamesIndex from "./components/GamesIndex/GamesIndex";
import GamesForm from "./components/GamesForm/GamesForm";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])


  return (
    <>
    <NavBar />
    <Switch>
      
      <Route path="/user-profile/:userId">
        <UserShowPage />
      </Route>

      <Route path="/games">
        <GamesIndex />
      </Route>

      <Route exact path="/">
        <Splash />
      </Route>  
    
      <Route exact path="/about">
        <About />
        {/* <GamesForm /> */}
      </Route> 
    
    </Switch>
    <Footer />
    </>
  );
}

export default App;
