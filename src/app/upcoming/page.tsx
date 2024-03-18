"use client"
import Layout from "@/layout/Layout";
import {UpcomingComponent} from "@/components"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Upcoming() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
    return (
      <Layout activeNavBtn="upcoming" headerType="secondary">
            <UpcomingComponent />
      </Layout>
    );
  }