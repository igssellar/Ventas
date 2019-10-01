import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container } from 'semantic-ui-react';
import { MyLogin } from './MyLogin';
import { MyMenu } from './MyMenu';

const App: React.FC = () => {
  return (
    <Fragment>
    <MyMenu />
    <Container>
      <MyLogin />
    </Container>
  </Fragment>
  );
}

export default App;
