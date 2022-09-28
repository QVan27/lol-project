import React, { FunctionComponent } from "react";
// import { Col, Container, Form, FormGroup, Input, Label } from "reactstrap";
// import { useInput } from "../hooks/useInput";
// import axios from '../../config/axios';

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
        <div className="wrap-main">
          <div className="home__container"></div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
