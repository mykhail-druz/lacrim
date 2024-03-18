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
    title: "Huile Activatrice pour Barbe",
    subtitle: "Essentiel",
    desc: "Assouplit les cheveux et favorise la croissance de la barbe.",
    mobileUrl: "/images/herobanner/hero_mobile_1.png",
  },
  {
    url: "/images/herobanner/hero_slide_second.webp",
    title: "Masque Purifiant pour le Visage",
    subtitle: "Essentiel",
    desc: "Élimine les impuretés, exfolie et resserre les pores.",
    mobileUrl: "/images/herobanner/hero_mobile_2.png",
  },
  {
    url: "/images/herobanner/hero_slide_third.webp",
    title: "Masque pour Cheveux",
    subtitle: "Essentiel",
    desc: "Conditionne en profondeur, améliore la brillance et l'élasticité des cheveux.",
    mobileUrl: "/images/herobanner/mobile_hero_slide_third.png",
  },
  {
    url: "/images/herobanner/hero_slide_fourth.webp",
    title: "Shampoing Fortifiant",
    subtitle: "Essentiel",
    desc: "Nettoie, purifie et revitalise la croissance des cheveux.",
    mobileUrl: "/images/herobanner/hero_mobile_4.png",
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
    <section id="up" className={`slide-container ${styles.section}`}>
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
                backgroundImage: `url(${
                  isMobile ? slideImage.mobileUrl : slideImage.url
                })`,
                backgroundSize: "cover",
                backgroundClip: "border-box",
                height: "100vh",
              }}
              className="flex lg:justify-center lg:items-center"
            >
              <div className="space-y-8 flex flex-col lg:mx-0 lg:ml-auto lg:mr-[20%] mr-0 ml-0 mx-auto lg:px-0 px-8 lg:items-start items-start lg:mt-0 mt-[250px]">
                <div>
                  <h2 className="lg:text-[32px] text-white ">
                    {slideImage.subtitle}
                  </h2>
                  <h1 className="lg:text-[44px] text-beige font-bold">
                    {slideImage.title}
                  </h1>

                  <p className="lg:text-[24px] text-white">{slideImage.desc}</p>
                </div>
                <Button
                  href={"/products"}
                  buttonColor={"beige"}
                  fontSize={"18"}
                >
                  Découvrir
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};
