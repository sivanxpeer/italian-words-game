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
 const ref= useRef("primary-nav");
useEffect(()=>{
  ref.current="nav-toggle";
})
  ///check how to convert using REF
// const primaryNav=document.querySelector(".navbar-container");
// const navToggle=document.querySelector(".mobile-nav-toggle");


// const handleClick =()=>{
//     // if(e.nativeEvent.target.includes("clicked"))
//     // if
//     // this.props.clicked = true
//     // console.log(e.nativeEvent.target)
//     const visibility = primaryNav.getAttribute("data-visible");
//     if(visibility==="false"){
//         primaryNav.setAttribute("data-visible",true);
//         navToggle.setAttribute("aria-expanded", true)
//         // console.log(visibility);
//       }
//       else{
//         primaryNav.setAttribute("data-visible",false);
//         navToggle.setAttribute("aria-expanded", false)
//         console.log(visibility);
//     }
// }
 
  return (
    <div className="App" >
      {/* <div className="image-glob" /> */}
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
          <Route path="/gamecard" exact component={GameCard} />
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
