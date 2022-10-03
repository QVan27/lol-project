import Konva from "konva";
import React, { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import styled from "styled-components";
import useImage from "use-image";

const Wrapper = styled.div`
  height: 100%;
  width: min(500px, 100%);
`;

const StyledStage = styled(Stage)`
  width: calc(100% - 30px);
  min-width: 350px;
  height: 500px;
  margin: 0 auto;
  background: center / cover no-repeat url("./build/images/map.png");
`;

const StyledLayer = styled(Layer)`
  width: calc(100% - 30px);
  height: auto;
`;

const Map: FunctionComponent = () => {
  const [image] = useImage("./build/images/buildings/tower.svg");
  return (
    <Wrapper>
      <StyledStage>
        <StyledLayer>
          <Image image={image} x={0} y={0} />
        </StyledLayer>
      </StyledStage>
    </Wrapper>
  );
};

export default Map;
