import * as React from 'react';
import { Button, Form, Header, Segment, Grid, Message } from "semantic-ui-react";

export interface IMyLoginProps {

}

export function MyLogin(props: IMyLoginProps) {
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Ingresar
                </Header>
                <Segment>
                    <Form size="large">
                        <Form.Input
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="Dirección de correo"
                        />
                        <Form.Input
                            fluid
                            icon="lock"
                            iconPosition="left"
                            placeholder="Contraseña"
                            type="password"
                        />

                        <Button color="blue" fluid size="large">
                            Ingresar
                        </Button>
                    </Form>
                </Segment>
                <Message>
                    ¿Aún no se ha registrado? <a href="#">Regístrese</a>
                </Message>
            </Grid.Column>
        </Grid>

    );
}