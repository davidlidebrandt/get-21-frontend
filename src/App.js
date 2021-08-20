import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/Home.js"
import LogIn from "./components/pages/LogIn.js";
import SignUp from "./components/pages/SignUp.js";
import StartMenu from "./components/pages/StartMenu.js";
import GamePage from "./components/pages/GamePage.js";

function App() {
  const [currentPage, setCurrentPage] = useState();
 

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
      <Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Route>
      <Route path="/login">
      <LogIn currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Route>
      <Route path="/signup">
      <SignUp currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Route>
      <Route path="/startmenu">
      <StartMenu currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Route>
      <Route path="/gamepage">
      <GamePage currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
