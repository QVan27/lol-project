
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  margin-inline: auto;
  width: min(1140px, 92%);
`;

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const ResumeMatchContainer = styled.div`
    position: relative;
    max-width: 500px;
    min-width: 320px;
`;

export default function ResumeMatch({ data }: any) {
    console.log(data);
  return (

    <Wrapper>
        <Container>
            <ResumeMatchContainer>
                <div>
                    
                </div>
            </ResumeMatchContainer>
        </Container>
    </Wrapper>

      

    
  );
};


