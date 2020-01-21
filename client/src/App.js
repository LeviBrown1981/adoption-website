import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import styled from "styled-components";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <AppContainer>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </Container>
  </AppContainer>
);

const AppContainer = styled.div`
  background: #2e2e2e;
  height: 100vh;
`;

export default App;
