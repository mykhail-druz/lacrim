import Layout from "@/layout/Layout";
import {UpcomingComponent} from "@/components"


export default function Upcoming() {
    return (
      <Layout activeNavBtn="upcoming" headerType="secondary">
            <UpcomingComponent />
      </Layout>
    );
  }