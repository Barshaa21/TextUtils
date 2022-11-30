import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "text-utils dark mode";
   
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = "text-utils light mode";
    }

  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert('null');
    }, 1000);
  }
  return (
    <>
      
        <NavBar title={'TextUtils'} mode={mode} toggleMode={toggleMode} about='About Us' />
        <Alert alert={alert} />
        <div className="container">
          <TextForm heading='Text utils- word couter,character counter,lowercase to uppercase' mode={mode} showAlert={showAlert} />
        </div>
      
    </>
  );
}

export default App;
