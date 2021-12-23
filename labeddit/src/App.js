import { ThemeProvider } from '@material-ui/core';
import React, {useState} from 'react'
import Header from './components/Header';
import theme from './constants/theme';
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  const token = localStorage.getItem('token')
  const [rightButtonText, setRightButtonText] = useState(token ? 'Logout': 'Login') 

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
