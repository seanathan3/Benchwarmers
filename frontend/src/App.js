import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
    <p>Hello World!</p>
    <NavBar />
    <Route path="/">
      <Splash />
    </Route>  
    </>
  );
}

export default App;
