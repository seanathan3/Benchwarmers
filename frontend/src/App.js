import { Switch, Route } from "react-router-dom";
import Splash from "./components/Splash/Splash";

function App() {
  return (
    <>
    <h2>Hello from App</h2>
    <Route path="/">
      <Splash />
    </Route>  
    </>
  );
}

export default App;
