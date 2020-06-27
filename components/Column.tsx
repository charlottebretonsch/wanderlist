import { useMemo, useContext } from "react";
import styled from "styled-components";

import { Item } from "../data";
import Row from "./Row";
import ProgressBar from "./ProgressBar";
import { ItemContext } from "./ItemContext";

const Section = styled.section`
  align-items: center;
  border-right: solid 1px #dddddd;
  display: flex;
  flex-flow: column nowrap;
  flex-shrink: 0;
  width: 304px;
  overflow-y: scroll;
`;

const Title = styled.h2`
  align-self: stretch;
  font-size: 20px;
  line-height: 30px;
  margin: 24px 32px 16px;
`;

const List = styled.ol`
  align-items: stretch;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 276px;
`;

interface Props {
  name: string;
  items: Item[];
}

const Column = ({ name, items }: Props) => {
  const { values, toggleValue } = useContext(ItemContext);
  const progress = useMemo(() => {
    const total = items.length;
    const done = items.map((item) => values[item.id]).filter((x) => x).length;
    return (done * 100) / total;
  }, [items, values]);

  return (
    <Section>
      <ProgressBar progress={progress} />
      <Title>{name}</Title>
      <List>
        {items.map((item) => (
          <Row
            key={item.id}
            item={item}
            done={values[item.id]}
            toggle={() => toggleValue(item.id)}
          />
        ))}
      </List>
    </Section>
  );
};

export default Column;
