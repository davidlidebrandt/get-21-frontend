import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home.js"
import LogIn from "./components/pages/LogIn.js";
import SignUp from "./components/pages/SignUp.js";

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
      </Switch>
    </div>
  );
}

export default App;
