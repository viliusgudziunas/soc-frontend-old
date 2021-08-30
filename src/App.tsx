import { Container } from 'components/Container';
import { Navbar } from 'components/Navbar';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

const App = (): ReactElement => (
  <div className='font-mono'>
    <Router>
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </Router>
  </div>
);

export default App;
