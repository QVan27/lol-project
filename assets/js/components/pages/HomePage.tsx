import React, { FunctionComponent } from "react";
import { MAP } from "../../constants/route-paths";
import MainButton from "../shared/Buttons/MainButton";

const HomePage: FunctionComponent = () => {
  return (
    <main>
      <section className="home">
        <div className="wrap">
          <div className="home__container">
            <div className="home__container-logo">
              <img src="./build/images/logo-long-lol.png" alt="Logo Teemo" />
            </div>
            <MainButton page={MAP}>touch to start</MainButton>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
