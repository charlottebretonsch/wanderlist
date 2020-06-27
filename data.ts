import Notion, { LiteCollectionItem } from "@notion-cms/client";
import { UUID } from "@notion-cms/types";

interface SectionProps {
  Name: string;
  Items: UUID[];
}
export interface Section extends LiteCollectionItem<SectionProps> {}
interface ItemProps {
  Name: string;
  Section: string;
  Icon: any;
}
export interface Item extends LiteCollectionItem<ItemProps> {}

export const notion = new Notion(process.env.NOTION_API_KEY);

const sectionsCollectionId = "124de3be-382c-4a12-898f-4a0a6ef97f83";
const itemsCollectionId = "c6483876-8800-410d-b518-d3211d9e1dfd";

export const getSections = (): Promise<Section[]> =>
  notion.loadCollection(sectionsCollectionId);

export const getItems = (): Promise<Item[]> =>
  notion.loadCollection(itemsCollectionId);

export const getIconPath = (item: Item) => `/items/${item.id}.webp`;
