import { NavbarComponent } from 'components/navbar/NavbarComponent';
import { HomePage } from 'pages';
import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = (): ReactElement => (
  <div className='font-mono'>
    <Router>
      <NavbarComponent />
      <div className='container flex flex-row justify-center mx-auto'>
        <Switch>
          <Route path='/about'>
            <div>Hello</div>
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
