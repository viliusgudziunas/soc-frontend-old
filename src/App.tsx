import { Navbar } from 'components/Navbar';
import { Container } from 'lib/Container';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

const App = (): ReactElement => (
  <div className='font-mono h-screen bg-gray-100 text-gray-700'>
    <Router>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </Router>
  </div>
);

export default App;
