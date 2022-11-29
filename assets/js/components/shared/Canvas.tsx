import React from "react";
import styled from "styled-components";
import {
  AiFillBackward,
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillForward,
} from "react-icons/ai";
import { BiShow, BiHide } from "react-icons/bi";

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
  max-height: 500px;
  min-height: 320px;

  #map {
    width: 100%;
    background: center / cover no-repeat url("./build/images/map-500.png");
  }

  .towers, .kill {
    transform: translate(-100%, 0%);
    width: 10px;
    height: 10px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
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
    color: #c8aa6d;
  }
  span {
    color: #fff;
  }
`;

const Filters = styled.div`
  margin-inline: auto;
  width: min(500px, 92%);
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;

export default function Canvas({ data }: any) {
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

  const millisToMinutesAndSeconds = (millis: any) => {
    let minutes = Math.floor(millis / 60000);
    let seconds: any = ((millis % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const interval = 60000;
  const startTime = 0;

  const [allKills, setAllKills] = React.useState<any>([]);
  const championKills: Array<any> = [];
  const [toggle, setToggle] = React.useState(false);

  const showKills = () => {
    setToggle(!toggle);
    // loop every frames
    for (let i = 0; i < data.timeline.info.frames.length; i++) {
      const el = data.timeline.info.frames[i];
      // get events
      for (let j = 0; j < el.events.length; j++) {
        const event = el.events[j];
        // get all champion kills
        if (event.type === "CHAMPION_KILL") {
          const championKill = event;
          setAllKills(championKill);
          championKills.push(championKill);
        }
      }
    }
    setAllKills(championKills);
  };

  const championKill: Array<any> = [];

  const getAllEvents = (data: any) => {
    data.flatMap((item: any) => {
      item.events.flat().filter((event: any) => {
        event.type === "CHAMPION_KILL" && championKill.push(event);
      });
    });
    return championKill;
  };

  const index: number = 1;
  const btnPlay = React.useRef<HTMLDivElement>(null);
  const btnPause = React.useRef<HTMLDivElement>(null);

  const play = (bool: boolean, index: number) => {
    if (bool === false) {
      setIsPlaying(false);
      return;
    } else {
      getAllEvents(data.timeline.info.frames);
      setIsPlaying(true);
      if (index < championKill.length) {
        setTimeout(() => {
          console.log(championKill[index]);
          play(true, ++index);
        }, (championKill[index].timestamp - championKill[index - 1].timestamp) / 100);
      }
    }
  };

  const start = () => {
    play(true, index);
  };

  const stop = () => {
    play(false, index);
  };

  return (
    <Wrapper>
      <Container>
        <Filters>
          <div>
            {!toggle ? (
              <ButtonControl onClick={showKills}>
                <BiShow className="backward" />
              </ButtonControl>
            ) : (
              <ButtonControl onClick={showKills}>
                <BiHide className="backward" />
              </ButtonControl>
            )}
            <span>{!toggle ? "Afficher les kills" : "Cacher les kills"}</span>
          </div>
        </Filters>

        <CanvasContainer>
          <canvas id="map" ref={mapRef} width="500" height="500" />
          {buildings.towers.map((team, i) => {
            return Object.keys(team).map((color, j) => {
              return team[color].map(
                (
                  tower: {
                    src: string;
                    y: number;
                    x: number;
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
                        background: `center / cover no-repeat url(${tower.src})`,
                      }}
                    />
                  );
                }
              );
            });
          })}

          {toggle &&
            allKills.map((kill: any, i: number) => {
              if (kill.victimId > 4) {
                console.log(kill);
                return (
                  <div
                    className="kill"
                    key={i}
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      bottom: (kill.position.y / 15000) * 100 + "%",
                      left: (kill.position.x / 15000) * 100 + "%",
                      background: `center / cover no-repeat url(./build/images/map-events/skull-blue.svg)`,
                    }}
                  />
                );
              } else
                return (
                  <div
                    className="kill"
                    key={i}
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      bottom: (kill.position.y / 15000) * 100 + "%",
                      left: (kill.position.x / 15000) * 100 + "%",
                      background: `center / cover no-repeat url(./build/images/map-events/skull-red.svg)`,
                    }}
                  />
                );
            })}

          {/* {console.log(championKill)}
          {championKill.map((kill: any, i: number) => {
            return (
              <div
                className="kill"
                key={i}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  bottom: (kill.position.y / 15000) * 100 + "%",
                  left: (kill.position.x / 15000) * 100 + "%",
                  width: 20,
                  height: 20,
                  background: `center / cover no-repeat url(./build/images/map-events/skull-blue.svg)`,
                }}
              />
            );
          })} */}
        </CanvasContainer>

        <Player>
          <ButtonControl>
            <AiFillBackward className="backward" />
            <span>reculer</span>
          </ButtonControl>

          <ButtonPlayPause>
            {isPlaying ? (
              <div ref={btnPause} onClick={stop}>
                <AiFillPauseCircle className="pause" />
              </div>
            ) : (
              <div ref={btnPlay} onClick={start}>
                <AiFillPlayCircle className="play" />
              </div>
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
