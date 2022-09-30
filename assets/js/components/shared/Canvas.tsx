import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: min(500px, 100%);
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  #canvas {
    width: calc(100% - 30px);
    min-width: 350px;
    height: auto;
    z-index: 0;
    margin: 0 auto;
    background: center / cover no-repeat url("./build/images/map.png");
  }
`;

// const Tower = styled.div<Props>`
//   position: absolute;
//   top: ${(props) => props.top};
//   left: ${(props) => props.left};
//   right: ${(props) => props.right};
//   bottom: ${(props) => props.bottom};
//   background: center / contain no-repeat url(${(props) => props.src});
//   width: 20px;
//   height: 20px;
// `;

const HeatMap: FunctionComponent = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const data = {
    towers: [
      {
        RED: [
          // "top_lane"
          { x: 4318, y: 13875 },
          { x: 7943, y: 13411 },
          { x: 10481, y: 13650 },
          // "mid_lane"
          { x: 8955, y: 8510 },
          { x: 9767, y: 10113 },
          { x: 11134, y: 11207 },
          // "bot_lane"
          { x: 13866, y: 4505 },
          { x: 13624, y: 10572 },
          { x: 13327, y: 8226 },
          // "nexus"
          { x: 13252, y: 12730 },
          { x: 12823, y: 13193 },
        ],
        BLUE: [
          // "top_lane"
          { x: 981, y: 10441 },
          { x: 1512, y: 6699 },
          { x: 1169, y: 4287 },
          // "mid_lane"
          { x: 3651, y: 3696 },
          { x: 5846, y: 6396 },
          { x: 5048, y: 4812 },
          // "bot_lane"
          { x: 6919, y: 1483 },
          { x: 10504, y: 1029 },
          { x: 4281, y: 1253 },
          // "nexus"
          { x: 1748, y: 2270 },
          { x: 2177, y: 1807 },
        ],
      },
    ],
  };

  // const draw = (ctx: CanvasRenderingContext2D | null) => {
  //   if (ctx) {
  //     ctx.clearRect(0, 0, 30, 30);
  //     ctx.fillStyle = "red";
  //     ctx.fillRect(0, 0, 100, 100);
  //     ctx.fillStyle = "blue";
  //     ctx.fillRect(100, 0, 100, 100);
  //   }
  // };

  // React.useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas?.getContext("2d");
  //   draw(context);
  // }, [towers]);

  //   towers.map((turret) => {
  //     const { RED, BLUE } = turret;
  //     RED.map((red) => {
  //       const { x, y } = red;
  //       console.log(x, y);
  //     });
  //     BLUE.map((blue) => {
  //       const { x, y } = blue;
  //       console.log(x, y);
  //     });
  //   });

  

    const redTowers = data.towers[0].RED.map((tower) => {
      return (
        <img
          style={{
            position: "absolute",
            top: `${tower.y}px`,
            left: `${tower.x}px`,
            width: "20px",
            height: "20px",
            background: `center / contain no-repeat url("./build/images/buildings/tower.svg")`,
          }}
        />
      );
    });

  //   const blueTowers = data.towers[0].BLUE.map((tower) => {
  //     return (
  //       <img
  //         style={{
  //           position: "absolute",
  //           top: `${tower.y}px`,
  //           left: `${tower.x}px`,
  //           width: "20px",
  //           height: "20px",
  //           background: `center / contain no-repeat url("./build/images/buildings/tower.svg")`,
  //         }}
  //       />
  //     );
  //   });

  console.log(redTowers);

  //   const draw = (ctx: CanvasRenderingContext2D | null) => {
  //     if (ctx) {
  //       redTowers.map((tower) => {
  //         ctx.drawImage(tower, 0, 0);
  //       });
  //     }
  //   };

  const draw = (ctx: CanvasRenderingContext2D | null) => {
    
  };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    draw(context);
  }, []);

  return (
    <Wrapper>
      <Container>
        <canvas ref={canvasRef} id="canvas" width="500" height="500"></canvas>
      </Container>
    </Wrapper>
  );
};

export default HeatMap;
