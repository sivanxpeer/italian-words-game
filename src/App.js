import './App.css';
// import { Container } from '@mui/material';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
// import Welcome from './components/Welcome/Welcome';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import User from './components/User/User';
import GameCard from './components/GameCard/GameCard';
import NotFound from "./components/NotFound";
// import { createRef } from 'react';
import GoogleLogin from 'react-google-login';


function App() {


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
  const responseGoogle=(response)=>{
     console.log(response);
     console.log(response.profileObj);
  }
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
            <GoogleLogin className="login"
            clientId="910294832444-nah1pvsh5jj8q9saocioacufr61c6out.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}

            ></GoogleLogin>

    </div>
  );
}

export default App;
