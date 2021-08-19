import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home.js"
import LogIn from "./components/pages/LogIn.js";
import SignUp from "./components/pages/SignUp.js";
import StartMenu from "./components/pages/StartMenu.js";
import GamePage from "./components/pages/GamePage.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      <Route path="/login">
      <LogIn/>
      </Route>
      <Route path="/signup">
      <SignUp/>
      </Route>
      <Route path="/startmenu">
      <StartMenu/>
      </Route>
      <Route path="/gamepage">
      <GamePage/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
