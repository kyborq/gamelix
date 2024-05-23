import { Content, Layout, Side, SideButton } from "../../components";

export const StoragePage = () => {
  return (
    <Layout title="Storage">
      <Side>
        <SideButton label="All" current />
        <SideButton label="Newbies" />
        <SideButton label="Banned" />
      </Side>
      <Content></Content>
    </Layout>
  );
};
