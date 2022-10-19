import React, { FunctionComponent, Component } from "react";
import styled from "styled-components";

interface Props{
    top: string;
    left: string;
    right: string;
    bottom: string;
    src: string;
}

const Container = styled.div`
  width: min(500px, 100%);
  height: max(500px, 500px + 1vw);
  background: center / contain no-repeat url("./build/images/map.png");
  position: relative;
`;

const Tower = styled.div<Props>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  background: center / contain no-repeat url(${(props) => props.src});
  width: 20px;
  height: 20px;
`;

const HeatMap: FunctionComponent = () => {
  return (
    <Container>
      <Tower top={"20%"} left={"5%"} bottom={"auto"} right={"auto"} src={"./build/images/buildings/tower.svg"} />
    </Container>
  );
};

export default HeatMap;
