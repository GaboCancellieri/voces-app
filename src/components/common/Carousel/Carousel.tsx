import React from "react";
import { Image } from "../index";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Carousel = () => {
  return (
    <MultiCarousel
      additionalTransfrom={0}
      arrows
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      sliderClass=""
      slidesToSlide={1}
    >
      <Image
        width={"1368px"}
        height={"650px"}
        altText={"asd"}
        url={
          "https://img.freepik.com/foto-gratis/mujer-auriculares-grabando-musica_155003-16942.jpg?w=2000"
        }
      ></Image>

      <Image
        width={"1368px"}
        height={"650px"}
        altText={"asd"}
        url={"https://definicion.de/wp-content/uploads/2016/06/canto-1.jpg"}
      ></Image>
      <Image
        width={"1368px"}
        height={"650px"}
        altText={"asd"}
        url={
          "https://www.escolanossocanto.com.br/images/blog/o-canto--muda-o-seu-cerebro.jpg"
        }
      ></Image>
    </MultiCarousel>
  );
};
export default Carousel;
