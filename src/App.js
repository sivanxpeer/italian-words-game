import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './components/User/User';
import GameCard from './components/GameCard/GameCard';
import NotFound from "./components/NotFound";


function App() {
  const [scores, setScores] = useState()
  const [myUser, setMyUser] = useState(null);

  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar setMyUser={setMyUser} myUser={myUser}/>
        <Switch>
          <Route path="/" exact component={Header} myUser={myUser}>
          </Route>
          <Route path="/gamecard" exact >
            <GameCard setScores={setScores} scores={scores} myUser={myUser}/>
          </Route>
          <Route path="/user" exact component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
