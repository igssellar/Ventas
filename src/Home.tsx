import * as React from 'react';
import {MyCarouselll} from './MyCarouselll';
import { Image, Menu, Container } from 'semantic-ui-react';
import { MyMenu } from './MyMenu';
import { MySale } from './MySale';
import Cardd from "./MyCard";
export interface IMyHomeProps {

}

export function MyHome(props: IMyHomeProps) {
    return(

        <Container>
            <MyMenu></MyMenu>
            <MyCarouselll />
            <Container><Cardd /></Container>

        </Container>
    );

}
