"use client";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./HeroBanner.module.css";
import Arrow from "@/icons/arrow.svg";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "90vh",
};
const slideImages = [
  {
    url: "/images/herobanner/hero_slide.webp",
    caption: "Slide 1",
  },
  {
    url: "/images/herobanner/hero_slide_second.webp",
    caption: "Slide 2",
  },
  {
    url: "/images/herobanner/hero_slide_third.webp",
    caption: "Slide 3",
  },
    {
    url: "/images/herobanner/hero_slide_fourth.webp",
    caption: "Slide 3",
    },
];
export const HeroBanner = () => {
    const [activeIndex, setActiveIndex] = useState(0);



  const PrevArrow = (
    <div
      style={{ cursor: "pointer", position: "absolute", left: 0, zIndex: 30 }}
      className={styles.prevArrow}
    >
      <Arrow className="rotate-180" />
    </div>
  );

  const NextArrow = (
    <div
      style={{ cursor: "pointer", position: "absolute", right: 0, zIndex: 30 }}
      className={styles.nextArrow}
    >
      <Arrow />
    </div>
  );

  const customIndicators = (index:any) => (
      <span className="indicator"
      >
      </span>
  );

  
  return (
    <div className="slide-container">
      <Slide
        transitionDuration={1200}
        duration={2500}
        prevArrow={PrevArrow}
        nextArrow={NextArrow}
        canSwipe={false}
        defaultIndex={0}
        indicators={customIndicators}
        autoplay
        easing={"ease-out"}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} >
            <div
                    style={{ ...divStyle, backgroundImage: `url(${slideImage.url})`, backgroundSize:'cover', height:'100vh' }}
            >
              {/* <span style={spanStyle}>{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
