import { log } from "console";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import fetchData from "../../utils/fetchData";

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

export default function HeatMap({ data }: any) {
  const mapRef = React.useRef<HTMLCanvasElement>(null);
  const towerRef = React.useRef<HTMLDivElement>(null);

  // const matchId = "EUW1_6113359836";
  // const basicUrl = "http://127.0.0.1:8000/bdd/";
  // const match = fetchData(`${basicUrl}jensen/matches/${matchId}`);

  // const [match, setMatch] = React.useState();

  // React.useEffect(() => {
  //   (async () => {
  //     const response = await fetchData(`${basicUrl}jensen/matches/${matchId}`);
  //     setMatch(response);
  //   })();
  // }, []);

  // console.log(match);

  // React.useEffect(() => {
  //   // const draw = (x: number, y: number) => {
  //   //   ctx.drawImage(towerImg, x, y, 20, 20);
  //   // };
  //   // // const draw = (x: number, y: number) => {
  //   // //   ctx.beginPath();
  //   // //   ctx.arc(x, y, 5, 0, 2 * Math.PI);
  //   // //   ctx.fillStyle = "red";
  //   // //   ctx.fill();
  //   // // };
  //   // const drawHeatMap = (data: any) => {
  //   //   const { frames } = data;
  //   //   frames.forEach((frame: any) => {
  //   //     frame.events.forEach((event: any) => {
  //   //       if (event.type === "BUILDING_KILL") {
  //   //         const { position } = event;
  //   //         draw(position.x, position.y);
  //   //       }
  //   //     });
  //   //   });
  //   // };
  //   // drawHeatMap(matchData);
  // }, []);

  console.log(data);
  

  const data1 = {
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
          {data1.towers.map((team, i) => {
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
                    <div
                      className="towers"
                      key={k}
                      id={`tower-${i}-${j}-${k}`}
                      ref={towerRef}
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        bottom: (tower.y / 15000) * 100 + "%",
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
}

// export default HeatMap;
