import React from "react";
import Slider from "react-slick";
export interface SlickImageProps {
  listImg: string[];
}
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleArrow />,
  prevArrow: <SampleArrow />,
};
export default function SlickImage(props: SlickImageProps) {
  const { listImg } = props;
  return (
    <Slider {...settings}>
      {listImg &&
        listImg.map((it) => <img key={it} src={it} alt="slick-img" />)}
    </Slider>
  );
}
