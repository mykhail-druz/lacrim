"use client";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./HeroBanner.module.css";
import Arrow from "@/icons/arrow.svg";
import { Button } from "@/components";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {};
const slideImages = [
    {
      url: "/images/herobanner/hero_slide.webp",
      title: "Beard Oil Activator",
      subtitle: "Essential",
      desc: "Softens hair & supports beard growth.",
    mobileUrl: '/images/herobanner/mobile_hero_slide_third.png',
    },
  {
    url: "/images/herobanner/hero_slide_second.webp",
      title: "Purifying Face Mask",
      subtitle: "Essential",
      desc: "Eliminates impurities, exfoliates & tightens pores.",
    mobileUrl: '/images/herobanner/mobile_hero_slide_third.png',

  },
  {
    url: "/images/herobanner/hero_slide_third.webp",
    title: "Hair Mask",
    subtitle: "Essential",
    desc: "Deeply conditions, improves shine & hair elasticity.",
    mobileUrl:'/images/herobanner/mobile_hero_slide_third.png',
  },
  {
    url: "/images/herobanner/hero_slide_fourth.webp",
      title: "Fortifying Shampoo",
      subtitle: "Essential",
      desc: "Cleanses, purifies & rejuvenates hair growth.",
    mobileUrl: '/images/herobanner/mobile_hero_slide_third.png',
  },
];
export const HeroBanner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
  const PrevArrow = (
    <div
      style={{ cursor: "pointer", position: "absolute", left: 0, zIndex: 30 }}
      className={"md:block hidden"}
    >
      <Arrow className="rotate-180 ml-32" />
    </div>
  );

  const NextArrow = (
    <div
      style={{ cursor: "pointer", position: "absolute", right: 0, zIndex: 30 }}
      className={"md:block hidden mr-32"}
    >
      <Arrow />
    </div>
  );

  const customIndicators = (index: any) => <span className="indicator"></span>;

  return (
    <section id="up" className="slide-container">
      <Slide
        transitionDuration={1200}
        duration={2500}
        prevArrow={PrevArrow}
        nextArrow={NextArrow}
        canSwipe={true}
        defaultIndex={0}
        indicators={customIndicators}
        autoplay
        easing={"ease-out"}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{
                        backgroundImage: `url(${isMobile ? slideImage.mobileUrl : slideImage.url})`,
                backgroundSize: "cover",
                backgroundClip: "border-box",
                height: "100vh",
             
              }}
              className="flex lg:justify-center lg:items-center"
            >
              <div className="space-y-8 flex flex-col lg:mx-0 lg:ml-auto lg:mr-[20%] mr-0 ml-0 mx-auto lg:px-0 px-8 lg:items-start items-start lg:mt-0 mt-[250px]">
                <div>
                  <h2 className="lg:text-[32px] text-white">
                    {slideImage.subtitle}
                  </h2>
                  <h1 className="lg:text-[44px] text-beige font-bold">
                    {slideImage.title}
                  </h1>

                  <p className="lg:text-[24px] text-white">{slideImage.desc}</p>
                </div>
                <Button href={""} buttonColor={"beige"} fontSize={"18"}>
                  Discover
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};
