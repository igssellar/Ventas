import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Image } from "semantic-ui-react";

export interface IMyCarousell {

}
export function MyCarousell(props: IMyCarousell) {
  return (
    <Carousel
      arrows
      autoPlay={4000}
      animationSpeed={2000}
      infinite
    >
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/09_SEPTIEMBRE/HPP/HPP_web_move.jpg" />
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_mixto_newarrivals.jpg" />
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_chunky_agosto.gif" />
    </Carousel>
  )
}