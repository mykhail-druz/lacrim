import Layout from "@/layout/Layout";
import { AboutHero, AboutUs } from "@/components";

export default function About() {
  return (
    <Layout activeNavBtn="about" headerType="secondary">
      <AboutHero />
      <AboutUs />
    </Layout>
  );
}
