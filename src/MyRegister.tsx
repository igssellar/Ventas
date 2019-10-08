import * as React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './dog.png';
export interface IMyRegisterProps {

}

export function MyRegister(props: IMyRegisterProps) {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
        <Header as='h2' color='teal' textAlign='center'>
            <Image fluid
                size="large"
                src={logo}
            />
        Registrate
        </Header>
        <Form size='large'>
            <Segment stacked>
                <Form.Input 
                    fluid
                    icon='user' 
                    iconPosition='left'
                    placeholder='Nombre'
                />
                <Form.Input 
                    fluid
                    icon='user' 
                    iconPosition='left'
                    placeholder='Apellido'
                />

                <Form.Input 
                    fluid
                    icon='user' 
                    iconPosition='left'
                    placeholder='E-mail'
                />
                <Message
                    error
                    header='Action Forbidden'
                    content='You can only sign up for an account once with a given e-mail address.'
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                />           
            <Button color='teal' fluid size='large'>
                Registrar  <a href=''> </a>
            </Button>
            <Form.Checkbox label='Estoy vendiendo mi alma al diablo' />
            </Segment>
        </Form>
        <Message>
            ¿Ya tienes cuenta?  
                <Link to="/login">
                    Pincha aquí
                </Link>
        </Message>
        </Grid.Column>
    </Grid>
        );
    
    }