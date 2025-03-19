import React from "react";
import HeroSection from "./HeroSection";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ProductCategories from "./ProductCategories";

const HomePage = () => {
  return (
    <main className=" ">
      <HeroSection />
      <ProductCategories />
      {/* <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12}
        totalSlides={3}
      >
        <ButtonBack>Back</ButtonBack>
        <Slider className="inline-block">
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider> */}
    </main>
  );
};

export default HomePage;
