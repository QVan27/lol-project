import React from "react";
import styled from "styled-components";
import {
  AiFillBackward,
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillForward,
} from "react-icons/ai";

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

const Player = styled.div`
  margin-inline: auto;
  width: min(500px, 92%);
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: flex-end;
`;

const ButtonControl = styled.button`
  background-color: transparent;
  border: none;
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  color: #cdbe91;
  cursor: pointer;
  .backward,
  .forward {
    background-color: #1e2328;
    border-radius: 100%;
    padding: 15px;
  }
  span {
    color: #fff;
  }
`;

const ButtonPlayPause = styled.button`
  background-color: transparent;
  border: none;
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: transparent;
  cursor: pointer;
  .play,
  .pause {
    background-color: #1e2328;
    border-radius: 100%;
    padding: 20px;
    /* background: linear-gradient(to bottom left, #c8aa6d, #7a5c29); */
    color: #c8aa6d;
  }
  span {
    color: #fff;
  }
`;

export default function HeatMap({ data }: any) {
  const buildings = {
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
  const mapRef = React.useRef<HTMLCanvasElement>(null);
  const towerRef = React.useRef<HTMLDivElement>(null);

  const [frame, setFrame] = React.useState(0);
  const [timestamp, setTimestamp] = React.useState(0);
  const [event, setEvent] = React.useState(0);
  const [eventTimestamp, setEventTimestamp] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [championKill, setChampionKill] = React.useState(0);
  const [positionKill, setPositionKill] = React.useState(0);

  // const currentFrame = frame;
  // const currentTimestamp = timestamp;
  // const currentEvent = event;
  // const currentEventTimestamp = eventTimestamp;
  // const currentChampionKill = championKill;

  const millisToMinutesAndSeconds = (millis: any) => {
    let minutes = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  console.table(data);

  const toggleTimeline = () => {
    const timestamp =
      data.timeline.info.frames[data.timeline.info.frames.length - 1].timestamp;
    const date = new Date(timestamp);

    console.log(date.getMinutes());

    const interval = 1000;
    const startTime = 0;

    // faire un flat Map || frame.flatMap(event) => event);

    // go from startTime to duration
    // at each interval, update the frame, timestamp, event, eventTimestamp, championKill
    // if the frame is the last frame, stop the interval and reset the frame to 0

    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <Wrapper>
      <Container>
        <CanvasContainer>
          <canvas id="map" ref={mapRef} width="500" height="500" />
          {buildings.towers.map((team, i) => {
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

        {/*onClick={() => history.goBack()}
            onClick={handlePlayPause}
            {isPlaying ? "Pause" : "Play"}
            onClick={handleNext}
            
            */}
        <Player>
          <ButtonControl>
            <AiFillBackward className="backward" />
            <span>reculer</span>
          </ButtonControl>

          <ButtonPlayPause onClick={toggleTimeline}>
            {isPlaying ? (
              <AiFillPauseCircle className="pause" />
            ) : (
              <AiFillPlayCircle className="play" />
            )}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </ButtonPlayPause>

          <ButtonControl>
            <AiFillForward className="forward" />
            <span>avancer</span>
          </ButtonControl>
        </Player>
      </Container>
    </Wrapper>
  );
}

// export default HeatMap;
