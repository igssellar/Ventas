import React from "react";
import Carousel from "semantic-ui-carousel-react";
import { Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export function MyCarousel() {
  let elements = [
    {
      render: () => {
        return (
          <Image src="https://cdn.linets.tech/data/1BANNER_2019/09_SEPTIEMBRE/HPP/HPP_web_move.jpg" />
        );
      }
    },
    {
      render: () => {
        return <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_mixto_newarrivals.jpg" />;
      }
    },
    {
      render: () => {
        return (
          <Image src="https://cdn.linets.tech/data/1BANNER_2019/08_AGOSTO/HPP/HPP_web_chunky_agosto.gif" />
        );
      }
    }
  ];
  return (
    // <div style={{ width: 500 }}>
      <Carousel
        elements={elements}
        duration={3000}
        animation="fade left"
        showNextPrev={true}
        showIndicators={false}
      />
    /* </div> */
  );
}