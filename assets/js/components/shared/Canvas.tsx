import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-inline: auto;
  width: min(1140px, 92%);
`;

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const CanvasContainer = styled.div`
  position: relative;
  max-width: 500px;
  min-width: 320px;
  #map {
    width: 100%;
    background: center / cover no-repeat url("./build/images/map.png");
  }
  .towers {
    width: 20px;
    height: 20px;
    z-index: 1;
  }
`;

const HeatMap: FunctionComponent = () => {
  const mapRef = React.useRef<HTMLCanvasElement>(null);
  const mCtx = mapRef.current?.getContext("2d");

  const towerRef = React.useRef<HTMLCanvasElement>(null);

  const data = {
    towers: [
      {
        RED: [
          // "top_lane"
          { src: "./build/images/buildings/tower-red.svg", x: 4318, y: 13875 },
          { src: "./build/images/buildings/tower-red.svg", x: 7943, y: 13411 },
          { src: "./build/images/buildings/tower-red.svg", x: 10481, y: 13650 },
          //   "mid_lane"
          { src: "./build/images/buildings/tower-red.svg", x: 8955, y: 8510 },
          { src: "./build/images/buildings/tower-red.svg", x: 9767, y: 10113 },
          { src: "./build/images/buildings/tower-red.svg", x: 11134, y: 11207 },
          //   "bot_lane"
          { src: "./build/images/buildings/tower-red.svg", x: 13866, y: 4505 },
          { src: "./build/images/buildings/tower-red.svg", x: 13624, y: 10572 },
          { src: "./build/images/buildings/tower-red.svg", x: 13327, y: 8226 },
          // "nexus"
          { src: "./build/images/buildings/tower-red.svg", x: 13252, y: 12730 },
          { src: "./build/images/buildings/tower-red.svg", x: 12823, y: 13193 },
        ],
        BLUE: [
          // "top_lane"
          { src: "./build/images/buildings/tower.svg", x: 981, y: 10441 },
          { src: "./build/images/buildings/tower.svg", x: 1512, y: 6699 },
          { src: "./build/images/buildings/tower.svg", x: 1169, y: 4287 },
          // "mid_lane"
          { src: "./build/images/buildings/tower.svg", x: 3651, y: 3696 },
          { src: "./build/images/buildings/tower.svg", x: 5846, y: 6396 },
          { src: "./build/images/buildings/tower.svg", x: 5048, y: 4812 },
          // "bot_lane"
          { src: "./build/images/buildings/tower.svg", x: 6919, y: 1483 },
          { src: "./build/images/buildings/tower.svg", x: 10504, y: 1029 },
          { src: "./build/images/buildings/tower.svg", x: 4281, y: 1253 },
          // "nexus"
          { src: "./build/images/buildings/tower.svg", x: 1748, y: 2270 },
          { src: "./build/images/buildings/tower.svg", x: 2177, y: 1807 },
        ],
      },
    ],
  };

  return (
    <Wrapper>
      <Container>
        <CanvasContainer>
          <canvas id="map" ref={mapRef} width="500" height="500" />
          {data.towers.map((team, i) => {
            return Object.keys(team).map((color, j) => {
              return team[color].map(
                (
                  tower: {
                    [x: string]: any;
                    y: any;
                    x: any;
                    width: any;
                    height: any;
                  },
                  k: any
                ) => {
                  return (
                    <canvas
                      
                      className="towers"
                      key={k}
                      id={`tower-${i}-${j}-${k}`}
                      ref={towerRef}
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        bottom:  (tower.y / 15000) * 100 + "%",
                        left: (tower.x / 15000) * 100 + "%",
                        width: tower.width,
                        height: tower.height,
                        background: `center / cover no-repeat url(${tower.src})`,
                      }}
                    />
                  );
                }
              );
            });
          })}
        </CanvasContainer>
      </Container>
    </Wrapper>
  );
};

export default HeatMap;
