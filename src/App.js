import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
// import Welcome from './components/Welcome/Welcome';
import User from './components/User/User';

function App() {
  return (
    <div className="App" style={{height:'100vh' ,backgroundColor:'#8D2828',color:'white' }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column' ,position:"relative"}}>
        <Header></Header>
        {/* <Welcome></Welcome> */}
        <User userName="Sivan" ></User>
      </Container>
    </div>
  );
}

export default App;
