import React, { FunctionComponent, useRef } from "react";
// Shared
import Canvas from "../shared/Canvas";

const MapPage: FunctionComponent = () => {
  const formRef = useRef<HTMLFormElement>(null);

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
            <form className="map__container__form"
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
                <input className="button-lol" type="submit" value="Rechercher" />
              </div>
            </form>
            <Canvas />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MapPage;
