import { useContext } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import { ItemContext } from "./ItemContext";

const Nav = styled.nav`
  display: flex;
  border-right: 1px solid #dddddd;
  flex-flow: column nowrap;
  flex-shrink: 0;
  justify-content: flex-end;
  padding: 32px 0;
  position: relative;
  width: 80px;
`;

const Title = styled.h1`
  align-self: flex-end;
  font-weight: normal;
  margin: 0;
  position: absolute;
  right: 50%;
  text-transform: uppercase;
  top: 32px;
  transform: rotate(-90deg);
  transform-origin: 100% 50%;
  translate: 0 -50%;

  em {
    font-style: normal;
    font-weight: bolder;
  }
`;

const Tools = styled.ol`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    font-size: 30px;
  }
`;

const Sidebar = () => {
  const { reset } = useContext(ItemContext);
  return (
    <Nav>
      <Title>
        Wander<em>list</em>
      </Title>
      <Tools>
        <li data-tip="Reset" onClick={reset}>
          🚫
        </li>
      </Tools>

      <ReactTooltip place="right" type="dark" effect="solid" />
    </Nav>
  );
};

export default Sidebar;
