import * as React from 'react';
import logo from './dog.png';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export interface IMyForgotProps {
    
}

export function MyForgot(props: IMyForgotProps) {
    return ( 
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
        <Image fluid
            size="large"
            src={logo}
        /> ¿Olvidaste tu contraseña? 
        </Header>
        <Form size='large'>
        <Segment stacked>
        Introduce el correo electrónico para buscar tu cuenta.
        <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail'
         />
        <Button color='teal' class="ui secondary button">
            <Link to="/">
                Buscar
            </Link>
        </Button>
        <Button class="ui button">
            <Link to="/">
                Atras
            </Link>
        </Button>
        </Segment>
        </Form>
        </Grid.Column>
    </Grid>


    )
}

