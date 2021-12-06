import styled from "styled-components";

import { Item } from "../data";
import Tick from "./Tick";

const ListItem = styled.li`
  align-items: center;
  background: ${(p) => (p.done ? "transparent" : "white")};
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  padding: 16px;

  & + & {
    margin-top: 8px;
  }

  h3 {
    flex-grow: 1;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    margin: 0;
  }
`;

const Icon = styled.img`
  flex-shrink: 0;
  margin-right: 16px;
  width: 40px;
`;

const StyledTick = styled(Tick)`
  flex-grow: 0;
  flex-shrink: 0;
  width: 24px;
`;

interface Props {
  item: Item;
  done: boolean;
  toggle: () => void;
}

const Row = ({ item, done, toggle }: Props) => (
  <ListItem key={item.id} done={done} onClick={toggle}>
    {item.meta.icon && <Icon src={item.meta.icon} />}
    <h3>{item.props.Name}</h3>
    <StyledTick checked={done} />
  </ListItem>
);

export default Row;
