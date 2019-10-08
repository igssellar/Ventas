import * as React from 'react';
import logo from './dog.png';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
//import { register } from './serviceWorker'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export interface IMyLoginProps {

}

export function MyLogin(props: IMyLoginProps) {
    return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                <Image fluid
                    size="large"
                    src={logo}
                /> Ingresa 
                </Header>
                <Form size='large'>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Contraseña'
                        type='password'
                    />

                    <Button color='teal' fluid size='large'>
                        Ingresar  <a href='./MyRegister'></a>
                    </Button>
                        <a href='#'> Olvidaste tu contraseña?</a>
                    </Segment>
                </Form>
                <Message>
                    ¿Aún no te registras? 
                    <Link to="/register">
                        Pincha aquí
                    </Link>         
                </Message>
                </Grid.Column>
            </Grid>
       
    );
    
}