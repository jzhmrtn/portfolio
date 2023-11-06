import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import slider from "../json/slider.json";

function Example() {
  return (
    <Carousel>
      {slider.map((item) => (
        <Item key={item.id} src={item.src} />
      ))}
    </Carousel>
  );
}

export default Example;
