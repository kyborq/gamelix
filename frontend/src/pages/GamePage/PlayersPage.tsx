import { Content, Layout, Side, SideButton } from "../../components";

export const PlayersPage = () => {
  return (
    <Layout title="Players">
      <Side>
        <SideButton label="All" current />
        <SideButton label="Newbies" />
        <SideButton label="Banned" />
      </Side>
      <Content></Content>
    </Layout>
  );
};
