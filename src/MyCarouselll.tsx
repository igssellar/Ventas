import React from 'react';
import Carousel from 'nuka-carousel';
import { Image } from "semantic-ui-react";

// export interface IMyCarousell {

// }

export function MyCarouselll() {
  return (
    <Carousel autoplay wrapAround dragging={true}>
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/09_SEPTIEMBRE/HPP/HPP_web_move.jpg" />
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_mixto_newarrivals.jpg" />
      <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_chunky_agosto.gif" />
    </Carousel>);
}
