import React, { FunctionComponent } from "react";
import "./css/App.css";

import {
  Grid,
} from "@material-ui/core";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts"

const App: FunctionComponent = (): JSX.Element => {
  // TODO Goncalo: DarkTheme, Provider, Animations and funny content (designer that can code!)
  return (
    <Grid container>

      <Home />

      <Projects />

      <About />

      <Blog />

      <Contacts />

    </Grid>
  );
}

export default App;