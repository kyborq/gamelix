import { Content, Layout, Side, SideButton } from "../../components";

export const LeadersPage = () => {
  return (
    <Layout title="Leaders">
      <Side>
        <SideButton label="All" current />
        <SideButton label="Newbies" />
        <SideButton label="Banned" />
      </Side>
      <Content></Content>
    </Layout>
  );
};
