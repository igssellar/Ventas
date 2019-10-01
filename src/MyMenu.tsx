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
      <Menu>
      <Container>
        <Menu.Item as="a" header>
          <Image fluid
            size="tiny"
            src={logo}
          />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as="a" name="login">
            Login
          </Menu.Item>

          <Menu.Item as="a" name="register">
            Register
          </Menu.Item>
          {/* <Route path="/register" component={MyRegister} /> */}
        </Menu.Menu>
      </Container>
    </Menu>
    // </Router>
    
  )
}