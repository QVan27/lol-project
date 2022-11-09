import React, { FunctionComponent, useState } from "react";
// import { useInput } from "../hooks/useInput";
// import axios from '../../config/axios';
// import { Link } from "react-router-dom";
import { MAP } from "../../constants/route-paths";
import MainButton from "../shared/Buttons/MainButton";

const HomePage: FunctionComponent = () => {
  //   const { value: title, bind, reset } = useInput('');

  //   const handleSubmit = (evt: any) => {
  //     evt.preventDefault();
  //     axios.post('/post/create', { title }).then((res) => {
  //       console.log(res.data);
  //     });
  //     reset();
  //   };
 

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
