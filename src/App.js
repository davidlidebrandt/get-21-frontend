import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Home from "./components/pages/home/Home"
import LogIn from "./components/pages/login/LogIn.js";
import SignUp from "./components/pages/signup/SignUp.js";
import StartMenu from "./components/pages/startmenu/StartMenu.js";
import GamePage from "./components/pages/gamepage/GamePage.js";
import NavMenu from "./components/other/nav/NavMenu.js";

function App() {
  const [currentPage, setCurrentPage] = useState();
 
  return (
    <div id="background" className="App"> 
    <div className="grid grid-cols-12 xl:grid-rows-6 min-h-screen w-full">
      {
        currentPage === "gamepage" ? (
          null
        ): 
        (<div className="col-span-12  xl:col-span-2 xl:row-span-6">
        <NavMenu currentPage={currentPage}/>
        </div>)
      }
    
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
    </div>
  );
}

export default App;
