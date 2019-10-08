import * as React from 'react'
import logo from './trifenix.png';
import { Image,Menu, Container, Divider} from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


export interface IMySaleProps {

}
export function MySale(props: IMySaleProps) {
  return ( 
      <Container>
        <div >
        <Image.Group size='tiny'>
            <Image src={logo} />
            <Image src={logo} />
            <Image src={logo} />
            <Image src={logo} />
            </Image.Group>
            <Divider hidden />
            <Image.Group size='small' style="center">
                <Image src={logo} />
                <Image src={logo} />
                <Image src={logo} />
                <Image src={logo} />
            </Image.Group>
      </div>
      </Container>







  );
}