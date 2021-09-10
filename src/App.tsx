import { Navbar } from 'components/Navbar';
import { AppContainer } from 'lib/containers';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

const App = (): ReactElement => (
  <div className='font-mono h-screen bg-gray-100 text-gray-700'>
    <Router>
      <Navbar />
      <AppContainer>
        <Routes />
      </AppContainer>
    </Router>
  </div>
);

export default App;
