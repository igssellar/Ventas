import * as React from 'react';
import {MyCarouselll} from './MyCarouselll';
import { Image, Menu, Container } from 'semantic-ui-react';
import { MyMenu } from './MyMenu';
import { MySale } from './MySale';
import Cardd from "./MyCard";
import Vista from "./Vistas";
import Coment from "./Comentarios";
export interface IMyHomeProps {

}

export function MyHome(props: IMyHomeProps) {
    return(

        <Container>
            <MyMenu></MyMenu>
            <MyCarouselll />
            <Container><Cardd /></Container>
            <Container><Vista /></Container>
            <Container><Coment /></Container>
        </Container>
    );

}
