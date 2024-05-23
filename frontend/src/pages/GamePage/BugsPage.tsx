import { Content, Layout, Side, SideButton } from "../../components";

export const BugsPage = () => {
  return (
    <Layout title="Bugs">
      <Side>
        <SideButton label="Inbox" current />
        <SideButton label="Closed" />
      </Side>
      <Content></Content>
    </Layout>
  );
};
