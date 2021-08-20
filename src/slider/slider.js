import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const SimpleSlider = () => (
  <Carousel plugins={["arrows"]}>
    <img src="/@ Macbook Pro.png" />
    <img src="/@ Macbook Pro.png" />
    <img src="/@ Macbook Pro.png" />
  </Carousel>
);

export default SimpleSlider;
