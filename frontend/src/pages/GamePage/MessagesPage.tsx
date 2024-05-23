import { Content, Layout, Side, SideButton } from "../../components";

export const MessagesPage = () => {
  return (
    <Layout title="Messages">
      <Side>
        <SideButton label="All" current />
        <SideButton label="Newbies" />
        <SideButton label="Banned" />
      </Side>
      <Content></Content>
    </Layout>
  );
};
