import React, { Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { MyLogin } from './MyLogin';
import { MyMenu } from './MyMenu';
import { MyCarousel } from './MyCarousel';
import { MyCarousell } from './MyCarousell';
import { MyCarouselll } from "./MyCarouselll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MyRegister } from './MyRegister';
import { MyHome } from './Home';

const App: React.FC = () => {
  return (
    <Fragment>
      <Router>
      <Switch>
      <Route path="/register" component={MyRegister} />
      <Route path="/login" component={MyLogin} />
      <Route path="/" component={MyHome} />
      </Switch>
      </Router>



    </Fragment>
  );
}

export default App;
