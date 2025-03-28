"use client"
import Layout from "@/layout/Layout";
import { AboutHero, AboutUs } from "@/components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Layout activeNavBtn="about" headerType="secondary">
      <AboutHero />
      <AboutUs />
    </Layout>
  );
}
