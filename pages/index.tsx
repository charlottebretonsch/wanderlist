import styled from "styled-components";

import Column from "../components/Column";
import Sidebar from "../components/Sidebar";
import {
  getSections,
  Section,
  Item,
  getItems,
  notion,
  getIconPath,
} from "../data";
import { ItemContextProvider } from "../components/ItemContext";

const Container = styled.div`
  align-items: stretch;
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
`;
const Content = styled.main`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  overflow-x: scroll;
`;

interface Props {
  items: Item[];
  sections: Section[];
}
const Index = ({ sections, items }: Props) => (
  <Container>
    <ItemContextProvider items={items}>
      <Sidebar />
      <Content>
        {sections.map((section) => (
          <Column
            key={section.id}
            name={section.props.Name}
            items={(section.props.Items || []).map((uuid) =>
              items.find((i) => i.id === uuid)
            )}
          />
        ))}
      </Content>
    </ItemContextProvider>
  </Container>
);

export async function getStaticProps() {
  const path = require("path");
  const items = await getItems();

  const promises = items.map((item) => {
    if (!item.meta.icon) return;
    const iconPath = getIconPath(item);
    const filePath = path.resolve(process.cwd(), `./public${iconPath}`);
    return notion.downloadImage(item.meta.icon, filePath, 40);
  });
  await Promise.all(promises);

  return {
    props: { items, sections: await getSections() },
  };
}

export default Index;
