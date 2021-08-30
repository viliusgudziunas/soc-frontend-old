import { Container } from 'components/Container';
import { NavbarComponent } from 'components/navbar/NavbarComponent';
import { ReactElement } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

const App = (): ReactElement => (
  <div className='font-mono'>
    <Router>
      <NavbarComponent />
      <Container>
        <Routes />
      </Container>
    </Router>
  </div>
);

export default App;
