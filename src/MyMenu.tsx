import React from 'react'
import logo from './trifenix.png';
import { Image, Menu, Container } from 'semantic-ui-react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { register } from './serviceWorker';
// import { MyRegister } from './MyRegister';

export interface IMyMenuProps {
}
export function MyMenu(props: IMyMenuProps) {
  return (
    // <Router>
      <Menu size='small' fluid>
      <Container>
        <Menu.Item as="a" header>
          <Image fluid
            size="mini"
            src={logo}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" name="login">
            Ingresar
          </Menu.Item>

          <Menu.Item as="a" name="register">
            Registro
          </Menu.Item>
          {/* <Route path="/register" component={MyRegister} /> */}
        </Menu.Menu>
      </Container>
    </Menu>
    // </Router>
    
  )
}