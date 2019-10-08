import React from 'react'
import logo from './trifenix.png';
import { Image, Menu, Container} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import { register } from './serviceWorker';
//import { MyRegister } from './MyRegister'; 




export interface IMyMenuProps {
}
export function MyMenu(props: IMyMenuProps) {
  return (
   //<Router>
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
            <Link to="/login">
              Ingresar
            </Link>
          </Menu.Item>

          <Menu.Item as="a" name="register">
            <Link to="/register">
                  Registrarse
              </Link>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
 //</Router>
    
  );
}