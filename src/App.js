import {useState}from 'react'
import './App.css';
// import { Container } from '@mui/material';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
// import Welcome from './components/Welcome/Welcome';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './components/User/User';
import GameCard from './components/GameCard/GameCard';
import NotFound from "./components/NotFound";
import { useRef,useEffect } from 'react';


function App() {
const [scores,setScores]=useState()

  return (
    <div className="App" >
  
      <BrowserRouter>
      {/* this is for mobile */}
        {/* <button className="mobile-nav-toggle"  */}
          {/* clicked={"false"} */}
          {/* // aria-controls="navbar-container" aria-expanded="false" */}
            {/* // onClick={handleClick}> */}
          {/* <span className="sr-only">Menu</span> */}
        {/* </button> */}
        <NavBar />
        <Switch>
          <Route path="/" exact component={Header}>
            {/* {data && <CardList allData={data} />} */}
          </Route>
          <Route path="/gamecard" exact >
            <GameCard setScores={setScores}/>
          </Route>
          {/* {data && (
            <ManageCards
            allData={data}
            deleteCard={deleteCard}
            updateItem={updateItem}
            newItem={newItem}
            />
          )} */}
          {/* <img className="image-glob" src="https://static.vecteezy.com/system/resources/previews/001/197/966/non_2x/earth-png.png"/> */}
          {/* </Route> */}
          <Route path="/user" exact component={User} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      {/* <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', position: "relative" }}> */}
      {/* <Header></Header> */}
      {/* <Welcome></Welcome> */}
      {/* <GameCard /> */}
      {/* <User userName="Sivan" ></User> */}
      {/* </Container> */}
      

    </div>
  );
}

export default App;
