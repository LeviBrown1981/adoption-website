import React from "react";
import styled, { keyframes, } from "styled-components";
import { Image, } from "semantic-ui-react";
import { StyledHeader, } from "../styles/shared";

const Home = () => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
    <StyledHeader as="h1" centered title>
      Sarah and Levi adoption page
    </StyledHeader>
    <br />
    <br />
    <StyledImage      
      size='large' 
      circular
      src="https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/s960x960/37541940_10156752471481209_7395970556006236160_o.jpg?_nc_cat=102&_nc_oc=AQmN87GgM7LnzSDReChjgXojagMM_EAiI9GNeIRapvfx6pyoOazIymuy8GgY4ngXjdQ&_nc_ht=scontent-den4-1.xx&_nc_tp=1002&oh=a52defd11f15961aecc14a5bae0ac06d&oe=5ED97D27" 
    />
  </div>
);

const StyledImage = styled(Image)`
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  height: 4px;
  right: 0;
  left: 0;
  top: 0;
  position: absolute;
  padding: 5px;
`;

export default Home;