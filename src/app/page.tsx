"use client"
import {
  ComingSoon,
  Redefining,
  UrbanMan,
  UrbanSkinkare,
  HeroBanner,
} from "@/components";
import Layout from "@/layout/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout headerType="main">
      <HeroBanner />
      <UrbanSkinkare />
      <UrbanMan />
      <Redefining />
      <ComingSoon />
    </Layout>
  );
}
