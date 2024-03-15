import { ComingSoon, Redefining, UrbanMan, UrbanSkinkare } from "@/components";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout headerType="main">
      <UrbanSkinkare />
      <UrbanMan />
      <Redefining />
      <ComingSoon />
    </Layout>
  );
}
