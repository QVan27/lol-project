import { log } from "console";
import React, { FunctionComponent, useRef } from "react";
// Utils
import fetchData from "../../utils/fetchData";
// Shared
import Canvas from "../shared/Canvas";
// import Map from "../shared/Map";

const MapPage: FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const basicUrl = "http://127.0.0.1:8000/bdd/";
  
  React.useEffect(() => {
    // const player = fetchData(`${basicUrl}jensen`);
    // const matches = api(`${basicUrl}jensen/matches`);
    // const singleMatch = api(`${basicUrl}jensen/matches/EUW1_6113359836`);
  }, []);

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
                // etc...


                const player = fetchData(`${basicUrl}${gamertag}`);
                const matches = fetchData(`${basicUrl}${gamertag}/matches`);
                
                console.log(player);
                console.log(matches);
                
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
            <div className="show_player">
            
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
