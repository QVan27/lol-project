import Konva from "konva";
import React, { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Image } from "react-konva";
import styled from "styled-components";
import useImage from "use-image";

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const Map: FunctionComponent = () => {

  const [tower] = useImage("./build/images/buildings/tower.svg");
  const [map] = useImage("./build/images/map.png");


  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <StyledImage image={map} />
        <StyledImage image={tower} />
      </Layer>
    </Stage>
  );
};

export default Map;

