import React, { useRef, useState } from "react";
import { IPlayers } from "../../models/IPlayers";
import { ApiFetch } from "../../services/ApiFetch";
import Canvas from "../shared/Canvas";
import ResumeMatch from "../shared/ResumeMatch";

interface IState {
  loading: boolean;
  player: IPlayers[];
  errorMessage: string;
}

const MapPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, setState] = useState<IState>({
    loading: false,
    player: [] as IPlayers[],
    errorMessage: "",
  });

  const { player, errorMessage, loading } = state;

  const [data, setData] = useState("");

  return (
    <main>
      <section className="map">
        <div className="wrap">
          <div className="map__container">
            <div className="map__container__head">
              <h1 className="map__container__head-title">LOL. Trackers</h1>
              <div className="map__container__head-img">
                <img src="./build/images/teemo.png" alt="Logo Teemo" />
              </div>
            </div>

            <form
              className="map__container__form"
              ref={formRef}
              onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();

                const target = e.target as typeof e.target & {
                  gamertag: { value: string };
                };

                const gamertag = target.gamertag.value;

                setState({ ...state, loading: true });

                ApiFetch.getPlayer(gamertag)
                  .then((res) =>
                    setState({
                      ...state,
                      loading: false,
                      player: res.data,
                    })
                  )
                  .catch((err) =>
                    setState({
                      ...state,
                      loading: false,
                      errorMessage: err.message,
                    })
                  );
              }}
            >
              <div className="map__container__form-group">
                <label>
                  Serveur :
                  <input type="text" name="server" value="EUW1" disabled />
                </label>
              </div>
              <div className="map__container__form-group">
                <label>
                  Gamertag :
                  <input type="text" name="gamertag" />
                </label>
              </div>
              <div className="map__container__form-submit">
                <input
                  className="button-lol"
                  type="submit"
                  value="Rechercher"
                />
              </div>
            </form>

            {player.length !== 0 ? (
              <div className="map__container__info">
                <div className="map__container__player">
                  <div className="map__container__player--img">
                    <img
                      src={
                        "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/" +
                        player.profilIconId +
                        ".png"
                      }
                      alt=""
                    />
                  </div>

                  <div className="map__container__player__content">
                    <p className="map__container__player__content--name">
                      {player.name}
                    </p>
                    <p className="map__container__player__content--level">
                      Level <span>{player.level}</span>
                    </p>
                  </div>
                </div>

                <div className="map__container__matches">
                  <p className="map__container__matches--title">
                    10 dernières parties
                  </p>
                  <div className="map__container__matches__list">
                    {player.games?.map((game: any, index: number) => {
                      return (
                        <div
                          className={"map__container__matches__list--item"}
                          key={index}
                          id={game.matchId}
                          onClick={() => {
                            setData(game);
                          }}
                        >
                          <p className="map__container__flex">
                            Mode de jeu :{" "}
                            <span>{game.resume.info.gameMode}</span>
                          </p>

                          <p className="map__container__flex">
                            Temps :{" "}
                            <span>
                              {Math.floor(game.resume.info.gameDuration / 60)}{" "}
                              minutes
                            </span>
                          </p>

                          <p className="map__container__flex">
                            Date :{" "}
                            <span>
                              {new Date(
                                game.resume.info.gameCreation
                              ).toLocaleDateString()}
                            </span>
                          </p>

                          <div className="map__container__flex">
                            <p>Champion:</p>
                            <div className="map__container__flex__list">
                              {game.resume.info.participants.map(
                                (participant: any, index: number) => {
                                  return (
                                    <div
                                      key={index}
                                      className="map__container__flex__list--item"
                                    >
                                      <div id={game.matchId}>
                                        <img
                                          src={
                                            "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/" +
                                            participant.championName +
                                            ".png"
                                          }
                                          alt=""
                                          width="16"
                                          height="16"
                                        />
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>

                          {game.resume.info.participants.map(
                            (participant: any, index: number) => {
                              if (participant.summonerName === player.name) {
                                if (
                                  participant.item0 !== 0 &&
                                  participant.item1 !== 0 &&
                                  participant.item2 !== 0 &&
                                  participant.item3 !== 0 &&
                                  participant.item4 !== 0 &&
                                  participant.item5 !== 0 &&
                                  participant.item6 !== 0
                                ) {
                                  return (
                                    <>
                                      <div
                                        className="map__container__flex"
                                        key={index}
                                      >
                                        <p>Items: </p>
                                        <div className="map__container__flex__list">
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item0 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item1 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item2 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item3 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item4 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item5 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                          <img
                                            src={
                                              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
                                              participant.item6 +
                                              ".png"
                                            }
                                            alt=""
                                            width="16"
                                            height="16"
                                          />
                                        </div>
                                      </div>
                                    </>
                                  );
                                }
                              }
                            }
                          )}

                          <div className="map__container__flex">
                            <p>K-D-A : </p>
                            <span>
                              {game.resume.info.participants.map(
                                (participant: any, index: number) => {
                                  if (
                                    participant.summonerName === player.name
                                  ) {
                                    return (
                                      <div key={index}>
                                        <p>
                                          {participant.kills} -{" "}
                                          {participant.deaths} -{" "}
                                          {participant.assists}
                                        </p>
                                      </div>
                                    );
                                  }
                                }
                              )}
                            </span>
                          </div>

                          {game.resume.info.participants.map(
                            (participant: any, index: number) => {
                              if (participant.summonerName === player.name) {
                                return (
                                  <div
                                    key={index}
                                    className={
                                      participant.teamId === 100
                                        ? "blue"
                                        : "red"
                                    }
                                  ></div>
                                );
                              }
                            }
                          )}

                          {game.resume.info.participants.map(
                            (participant: any, index: number) => {
                              if (participant.summonerName === player.name) {
                                return (
                                  <p
                                    key={index}
                                    className={participant.win ? "win" : "lose"}
                                  >
                                    {participant.win ? "Victoire" : "Défaite"}
                                  </p>
                                );
                              }
                            }
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div>Sélectionner un joueur valide</div>
            )}

            {data && (
              <>
                <p>Vous avez cliqué sur le match : {data.matchId}</p>
                <ResumeMatch data={data} />
                <Canvas data={data} />
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MapPage;
