
import './App.css';
import Home from './Pages/home.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LoginPage from './Components/loginpage/login.jsx';
import { useState } from 'react';

function App() {
  const [isLoggedIn, datarecevier] = useState("")

  const receiver = (pageOpen) => {
    datarecevier(pageOpen)
  }
  return (
    <div className="App">
      {isLoggedIn ? <Home /> : <LoginPage loginDatasender={receiver} />}
    </div>
  );
}

export default App;
