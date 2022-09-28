import React, { FunctionComponent } from "react";
// import { Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import { useInput } from "../hooks/useInput";
// import axios from '../../config/axios';
import { Link } from "react-router-dom";
import { MAP } from "../../constants/route-paths";

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
              <img src="./build/images/logo-long-lol.png" alt="" />
            </div>
            <Link className="button-lol" to={MAP}>touch to start</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
