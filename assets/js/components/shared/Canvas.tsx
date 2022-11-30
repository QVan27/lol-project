import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiFillClockCircle,
} from "react-icons/ai";
import { BiShow, BiHide, BiReset } from "react-icons/bi";

const Wrapper = styled.div`
  margin-inline: auto;
  width: min(1140px, 92%);
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
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

  .towers,
  .kill {
    transform: translate(-50%, 50%);
    width: 10px;
    height: 10px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  .towers {
    opacity: 0.7;
  }

  .kill {
    mix-blend-mode: hard-light;
    filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
  }
`;

const Player = styled.div`
  margin-inline: auto;
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
  .small {
    background-color: #1e2328;
    border-radius: 100%;
    padding: 15px;
  }
  span {
    color: #fff;
    white-space: nowrap;
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

const Log = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  z-index: 100;
  top: 10%;
  left: 50%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #c8aa6d;
  background-color: #1e2328;
  transform: translateX(-50%);

  p {
    white-space: nowrap;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

  const [isPlaying, setIsPlaying] = React.useState(false);

  // const millisToMinutesAndSeconds = (millis: any) => {
  //   let minutes = Math.floor(millis / 60000);
  //   let seconds: any = ((millis % 60000) / 1000).toFixed(0);
  //   return seconds == 60
  //     ? minutes + 1 + ":00"
  //     : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  // };

  const [allKills, setAllKills] = React.useState<any>([]);
  const championKills: Array<any> = [];
  const [toggle, setToggle] = React.useState(false);

  const showKills = () => {
    setToggle(!toggle);
    for (let i = 0; i < data.timeline.info.frames.length; i++) {
      const el = data.timeline.info.frames[i];
      for (let j = 0; j < el.events.length; j++) {
        const event = el.events[j];
        if (event.type === "CHAMPION_KILL") {
          const championKill = event;
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

  getAllEvents(data.timeline.info.frames);

  const index: number = 1;
  const btnPlay = React.useRef<HTMLDivElement>(null);
  const btnPause = React.useRef<HTMLDivElement>(null);

  const [playKill, setPlayKill] = React.useState<any[]>([]);

  // NE PAS SUPPRIMER LA PREMIERE FONCTION PLAY !!!

  // const play = (bool: boolean, index: number) => {
  //   if (bool === false) {
  //     setIsPlaying(false);
  //     return;
  //   } else {
  //     getAllEvents(data.timeline.info.frames);
  //     setIsPlaying(true);
  //     if (index < championKill.length) {
  //       setTimeout(() => {
  //         const current = championKill[index];
  //         setPlayKill((prev) => [...prev, current]);
  //         play(true, ++index);
  //       }, (championKill[index].timestamp - championKill[index - 1].timestamp) / 100);
  //     }
  //   }
  // };

  // const start = () => {
  //   setIsPlaying(true);
  //   play(true, index);
  // };

  // const stop = () => {
  //   setIsPlaying(false);
  //   setPlayKill([]);
  //   play(false, index);
  // };

  // NE PAS SUPPRIMER LA PREMIERE FONCTION PLAY !!!

  // Recursive SetTimeout Function to play the game
  // const play = (bool: boolean, index: number) => {
  //   if (bool === false) {
  //     setIsPlaying(false);
  //     return;
  //   } else {
  //     getAllEvents(data.timeline.info.frames);
  //     setIsPlaying(true);
  //     if (index < championKill.length) {
  //       setTimeout(() => {
  //         const current = championKill[index];
  //         setPlayKill((prev) => [...prev, current]);
  //         play(true, ++index);
  //       }, (championKill[index].timestamp - championKill[index - 1].timestamp) / 100);
  //     }
  //   }
  // };

  // const start = () => {
  //   setIsPlaying(true);
  //   play(true, index);
  // };

  // const stop = () => {
  //   setIsPlaying(false);
  //   setPlayKill([]);
  //   play(false, index);
  // };
  // Recursive SetTimeout Function to play the game

  // New Function

  // const [indexKill, setIndexKill] = React.useState(0);

  // const next = () => {
  //   // const index = playKill.length;
  //   if (indexKill < championKill.length) {
  //     setPlayKill((prev) => [...prev, championKill[indexKill]]);
  //     console.log(playKill);
  //     return true;
  //   }
  //   return false;
  // };

  // const play = () => {
  //   if (intervalref.current !== null) {
  //     intervalref.current = window.setInterval(() => {
  //       if (indexKill < championKill.length) {
  //         setPlayKill((prev) => [...prev, championKill[indexKill]]);
  //         console.log(playKill);
  //         return true;
  //       } else {
  //         if (intervalref.current) {
  //           window.clearInterval(intervalref.current);
  //           setIndexKill(0);
  //           intervalref.current = null;
  //         }
  //       }
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   const l: number = playKill.length;
  //   setIndexKill(l);
  //   console.log(indexKill);

  //   return () => {
  //     if (intervalref.current !== null) {
  //       window.clearInterval(intervalref.current);
  //     }
  //   };
  // }, [playKill]);

  // const prev = () => {
  //   try {
  //     const pop = playKill.pop();
  //     const index = playKill.length;
  //     const kill: NodeListOf<Element> = document.querySelectorAll(".kill");
  //     console.table(kill);

  //     for (const i of kill) {
  //       const lastKill = i.getAttribute("data-key");
  //       const lastKillToNumber = parseInt(lastKill);
  //       if (lastKillToNumber === index) {
  //         i.remove();
  //       }
  //     }
  //     console.log(pop);
  //     setPlayKill(playKill);
  //     console.log(playKill);
  //   } catch (e: any) {
  //     console.warn(e);
  //   }
  // };

  // https://www.kindacode.com/article/react-typescript-setinterval/
  // Ref
  // This will be used to store the interval
  const intervalref = useRef<number | null>(null);

  // Start the interval
  // This will be called when the user clicks on the start button
  const play = () => {
    if (intervalref.current !== null) return;
    setIsPlaying(true);
    intervalref.current = window.setInterval(() => {
      setPlayKill((prev) => [...prev, championKill[prev.length]]);
    }, 1000);
  };

  // Stop the interval
  // This will be called when the user clicks on the stop button
  const stop = () => {
    setIsPlaying(false);
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      setPlayKill([]);
      intervalref.current = null;
    }
  };

  // Pause the interval
  // This will be called when the user clicks on the pause button
  const pause = () => {
    setIsPlaying(false);
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };

  // Use the useEffect hook to cleanup the interval when the component unmounts
  useEffect(() => {
    // here's the cleanup function
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);

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
              return (
                <div
                  className="kill"
                  key={i}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: (kill.position.y / 15000) * 100 + "%",
                    left: (kill.position.x / 15000) * 100 + "%",
                    backgroundImage:
                      kill.victimId > 4
                        ? "url(./build/images/map-events/skull-and-crossbones-blue.svg)"
                        : "url(./build/images/map-events/skull-and-crossbones-red.svg)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
              );
            })}

          {playKill.map((kill: any, i: number) => {
            return (
              <div
                className="kill"
                key={i}
                data-key={i}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  bottom: (kill.position.y / 15000) * 100 + "%",
                  left: (kill.position.x / 15000) * 100 + "%",
                  backgroundImage:
                    kill.victimId > 4
                      ? "url(./build/images/map-events/skull-and-crossbones-blue.svg)"
                      : "url(./build/images/map-events/skull-and-crossbones-red.svg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            );
          })}
        </CanvasContainer>

        <Player>
          <Filters>
            <div>
              {!toggle ? (
                <ButtonControl onClick={showKills}>
                  <BiShow className="small" />
                </ButtonControl>
              ) : (
                <ButtonControl onClick={showKills}>
                  <BiHide className="small" />
                </ButtonControl>
              )}
              <span>{!toggle ? "Show Kills" : "Hide Kills"}</span>
            </div>
          </Filters>

          <ButtonPlayPause>
            {isPlaying ? (
              <div ref={btnPause} onClick={pause}>
                <AiFillPauseCircle className="pause" />
              </div>
            ) : (
              <div ref={btnPlay} onClick={play}>
                <AiFillPlayCircle className="play" />
              </div>
            )}
            <span>{isPlaying ? "Pause" : "Play"}</span>
          </ButtonPlayPause>

          <ButtonControl onClick={stop}>
            <BiReset className="small" />
            <span>Reset</span>
          </ButtonControl>
        </Player>
      </Container>

      {playKill.map((kill: any, i: number) => {
        return (
          console.log(kill),
          (
            <Log key={i} data-key={i}>
              <p className="killers">
                {kill.type} a tué {kill.type}
              </p>
              <p className="time">
                <AiFillClockCircle />
                <span>{kill.timestamp}</span>
              </p>
            </Log>
          )
        );
      })}
    </Wrapper>
  );
}
