import React, { Fragment } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import { MyLogin } from './MyLogin';
import { MyMenu } from './MyMenu';
import { MyCarousel } from './MyCarousel';
import { MyCarousell } from './MyCarousell';
import { MyCarouselll } from "./MyCarouselll";

const App: React.FC = () => {
  return (
    <Fragment>
      <MyMenu />
      {/* <Container>
        <MyLogin />
      </Container> */}
      <Container><MyCarouselll /></Container>

    </Fragment>
  );
}

export default App;
