import styled from "styled-components";

const Container = styled.div`
  background: rgba(249, 202, 36, 0.24);
  height: 8px;
  width: 100%;
`;
const Bar = styled.div`
  background: #f9ca24;
  height: 100%;
  width: ${(p) => p.progress}%;
  transition: 0.3s;
`;

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => (
  <Container>
    <Bar progress={progress} />
  </Container>
);

export default ProgressBar;
