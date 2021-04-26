import './App.css';
import React ,{ useState, useEffect } from 'react';
import LoadingScreen  from 'react-loading-screen';
import logo_sp from './mainlogo.svg';
import Nav from './components/nav/Nav';

function App(){
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500)
  }, [])
  return(
    <>
    {loading === false ? (
    <div className="App">
      <Nav />
    </div>

      ) : (

      <LoadingScreen
    loading={true}
    bgColor='#20163F'
    spinnerColor='#C6A603'
    textColor='#C6A603'
    logoSrc={logo_sp}
  > 
  </LoadingScreen>
      )}
  </>
  );
}

export default App