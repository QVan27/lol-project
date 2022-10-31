import React, { FunctionComponent, useRef, useEffect, useState } from "react";
import { IPlayers } from "../../models/IPlayers";
import { ApiFetch } from "../../services/ApiFetch";
// Utils
import fetchData from "../../utils/fetchData";
// Shared
import Canvas from "../shared/Canvas";
// import Map from "../shared/Map";

// const MapPage: FunctionComponent = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   const apiFetch = new ApiFetch();

  // useEffect(() => {
  //   (async () => {
  //     apiFetch.getPlayer('azerty').then(async (response) => {
  //      const player: Player = await response.json();
  //      console.log(player)
  //     }).catch(e => console.log(e));
  //   })();
  // }, []);

interface IState {
  loading: boolean;
  player:   IPlayers[];
  errorMessage: string;
}
  
const MapPage: React.FC = () => {       
const formRef = useRef<HTMLFormElement>(null);     
 const [state, setState] = useState<IState>({
    loading: false,
    player: [] as IPlayers[],	
    errorMessage: '',
  });


//network request
  useEffect(() => {
    setState({...state, loading: true});
    ApiFetch.getPlayer()
      .then((res) => setState({     
         ...state, loading: false, player: res.data
      }))
        .catch(err => setState({
          ...state, loading: false, errorMessage: err.message
        }));
  }, []);

  const { player, errorMessage, loading } = state;
console.log(player);
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
                  server: { value: string };
                  gamertag: { value: string };
                };
                const server = target.server.value; // typechecks!
                const gamertag = target.gamertag.value; // typechecks!
                
                // const url = ApiFetch(`${gamertag}`);
                


                
                
                // console.log(url);
                
              }}
            >
              
              <div className="map__container__form-group">
                <label>
                  Serveur :
                  <input type="text" name="server" />
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

            <div className="map__container__player">
              <div className="map__container__player__content">
                <p className="map__container__player__content--name">{player.name}</p>
                <p className="map__container__player__content--level">
                  Level <span>{player.level}</span>
                </p>
              </div>
              <div className="map__container__player__img">
                <img src="./build/images/225_summoner_icon.png" alt="" />
                <div className="map__container__player__profilicon">
                <img src={"http://ddragon.leagueoflegends.com/cdn/12.20.1/img/profileicon/" + player.profilIconId + ".png"} alt="" ></img>
                </div>
              </div>
            </div>

            <div className="map__container__matches">
              <p className="map__container__matches--title">
                10 dernières parties
              </p>
              <div className="map__container__matches__list">
                <div className="map__container__matches__list--item">
                 
                  

                  <p>match 1</p>
                  <div>
                    <p>mode de jeu : <span>classic</span></p>
                  </div>
                </div>
              </div>
            </div>

            <Canvas />
            {/* <Map /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MapPage;
