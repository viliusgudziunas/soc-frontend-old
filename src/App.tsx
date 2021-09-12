import { Navbar } from 'components/Navbar';
import { AppContainer } from 'lib/containers';
import { ReactElement, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

const App = (): ReactElement => {
  // TODO: Use react context to set this maybe
  const [isLoggedIn, _setIsLoggedIn] = useState(true);

  return (
    <div className='font-mono h-screen bg-gray-100 text-gray-700'>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <AppContainer>
          <Routes />
        </AppContainer>
      </Router>
    </div>
  );
};

export default App;
