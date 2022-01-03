import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
// import Welcome from './components/Welcome/Welcome';
import User from './components/User/User';

function App() {
  return (
    <div className="App" style={{height:'100vh' ,backgroundColor:'brown',color:'white' }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header></Header>
        {/* <Welcome></Welcome> */}
        <User></User>
      </Container>
    </div>
  );
}

export default App;
