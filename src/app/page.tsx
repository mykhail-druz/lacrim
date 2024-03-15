import { ComingSoon, Redefining, UrbanMan, UrbanSkinkare, HeroBanner } from "@/components";
import Layout from "@/layout/Layout";

export default function Home() {
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
