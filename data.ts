import Notion, { DatabaseProps, ParsedPage } from "@notion-cms/client";
import { UUID } from "@notion-cms/types";

interface SectionProps extends DatabaseProps {
  Name: string;
  Items: UUID[];
}
export interface Section extends ParsedPage<SectionProps> {}
interface ItemProps extends DatabaseProps {
  Name: string;
  Section: string;
  Icon: any;
}
export interface Item extends ParsedPage<ItemProps> {}

console.log(`"${process.env.NOTION_API_TOKEN}"`);
const notion = new Notion({ auth: process.env.NOTION_API_TOKEN });

const sectionsCollectionId = "124de3be-382c-4a12-898f-4a0a6ef97f83";
const itemsCollectionId = "c6483876-8800-410d-b518-d3211d9e1dfd";

export const getSections = (): Promise<Section[]> =>
  notion.loadDatabase(sectionsCollectionId, {});

export const getItems = (): Promise<Item[]> =>
  notion.loadDatabase(itemsCollectionId, {});
