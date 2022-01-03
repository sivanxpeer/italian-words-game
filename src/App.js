import './App.css';
// import { Container } from '@mui/material';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
// import Welcome from './components/Welcome/Welcome';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './components/User/User';
import GameCard from './components/GameCard/GameCard';
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Header}>
            {/* {data && <CardList allData={data} />} */}
          </Route>
          <Route path="/gamecard" exact component={GameCard} />
            {/* {data && (
              <ManageCards
                allData={data}
                deleteCard={deleteCard}
                updateItem={updateItem}
                newItem={newItem}
              />
            )} */}
          {/* </Route> */}
          <Route path="/user" exact component={User}/>
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
